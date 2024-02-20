import EventForm from '@/components/shared/EventForm'
import { getEventById } from '@/lib/actions/event.action'

import { auth } from '@clerk/nextjs'

type UpdateEventParams = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({ params: { id } }: UpdateEventParams) => {
  const { sessionClaims } = auth()

  const userId = sessionClaims?.userId as string

  const event = await getEventById(id)

  return (
    <>
      <section className="wrapper bg-dotted-pattern bg-cover bg-primary-50 bg-center py-5 md:py-10">
        <h3 className="h3-bold text-center sm:text-left">Update Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          userId={userId}
          type="Update"
          event={event}
          eventId={event._id}
        />
      </div>
    </>
  )
}

export default UpdateEvent
