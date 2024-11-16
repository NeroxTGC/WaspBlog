import { Newsletter } from 'wasp/entities'
import { type Subscribe } from 'wasp/server/operations'

type SubscribeInput = {
  email: string
}

type SubscribeResponse = {
  success: boolean
  message: string
}

export const subscribe: Subscribe<SubscribeInput, SubscribeResponse> = 
async ({ email }, context) => {
  try {
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      }
    }

    await context.entities.Newsletter.create({
      data: { email }
    })

    return {
      success: true,
      message: 'Successfully subscribed to the newsletter!'
    }
  } catch (error: any) {
    if (error.code === 'P2002') {
      return {
        success: false,
        message: 'This email is already subscribed'
      }
    }
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    }
  }
} 