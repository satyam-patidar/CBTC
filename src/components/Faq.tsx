import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="bg-[#050D14] min-h-dvh flex items-center justify-center">
      <Accordion type="single" collapsible className="section-wrapper w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How do I purchase tickets for an event?
          </AccordionTrigger>
          <AccordionContent>
            Tickets can be purchased directly through our website. Simply
            navigate to the event you're interested in and click on the "Buy
            Tickets" button. You'll be guided through the purchase process.
            Payment can be made using major credit/debit cards or through
            selected online payment platforms.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What is your refund policy?</AccordionTrigger>
          <AccordionContent>
            Refunds are available for events canceled by the organizer. However,
            for most events, you can request a refund up to 48 hours before the
            event's start time. Please note, some events have a no-refund
            policy, which will be clearly stated on the event's page. For
            detailed information, visit our Refund Policy section.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Are there any discounts available for bulk or group bookings?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer discounts for bulk or group bookings for certain
            events. The discount rate varies depending on the event and the
            number of tickets purchased. Please contact our support team for
            more information on group discounts.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            How can I find events that are suitable for children?
          </AccordionTrigger>
          <AccordionContent>
            You can use the filter option on our Events Calendar to display
            family-friendly events. Just select the "Family-Friendly" option
            under the event category filter. Additionally, event details pages
            will have an age suitability indicator for quick reference.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            Can I change the name on my ticket or transfer it to someone else?
          </AccordionTrigger>
          <AccordionContent>
            Yes, for most events, you can change the name on your ticket or
            transfer it to someone else up to 24 hours before the event starts.
            Please access your user account, select the ticket you wish to
            transfer, and follow the instructions for ticket transfer. For
            specific events, ticket transfers may not be allowed, which will be
            clearly mentioned on the event page.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            What should I do if I'm having trouble accessing my tickets?
          </AccordionTrigger>
          <AccordionContent>
            If you're having trouble accessing your tickets, first ensure you're
            logged into your account. If you still can't find your tickets,
            please check your email (including spam/junk folders) for the ticket
            confirmation. For further assistance, contact our support team with
            your order number and the email address used for booking.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            Do I need to print my ticket, or can I use my phone?
          </AccordionTrigger>
          <AccordionContent>
            You do not need to print your ticket. You can show your ticket on
            your phone at the event entrance. We encourage using the mobile
            ticket option to save paper and facilitate the check-in process.
            Please ensure your phone's screen is bright enough to scan the
            ticket barcode or QR code at the entrance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>
            What are the COVID-19 safety measures at events?
          </AccordionTrigger>
          <AccordionContent>
            The safety and well-being of our attendees, staff, and performers
            are our top priority. We closely follow government and health
            authority guidelines at all events. Measures may include mandatory
            mask-wearing, social distancing, hand sanitization stations, and
            limited event capacities. Specific safety measures for each event
            are listed on the event detail page on our website. Attendees are
            encouraged to review these measures prior to purchasing tickets and
            again before attending the event.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
