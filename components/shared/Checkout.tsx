import { IEvent } from '@/lib/database/models/event.model'
import { Button } from '../ui/button'

import { loadStripe } from '@stripe/stripe-js'
import { useEffect } from 'react'
import { checkoutOrder } from '@/lib/actions/order.actions'

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

type CheckoutParams = {
  event: IEvent
  userId: string
}

const Checkout = ({ event, userId }: CheckoutParams) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      )
    }
  }, [])
  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    }

    await checkoutOrder(order)
  }
  return (
    <form action={onCheckout} method="post">
      <Button
        className=" bg-indigo-600 hover:bg-indigo-500 sm:w-fit"
        size="lg"
        role="link"
        type="submit"
      >
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}
      </Button>
    </form>
  )
}
export default Checkout
