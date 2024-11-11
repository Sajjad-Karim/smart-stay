import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div
      style={{
        padding: "0 20px",
        color: "#000",
        maxWidth: "92rem",
        margin: "0 auto",
      }}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is SmartStay?</AccordionTrigger>
          <AccordionContent>
            SmartStay is a platform for travelers looking for unique,
            personalized stays that reflect their lifestyle and interests. It
            connects guests with hosts who offer more than just a room, creating
            experiences tailored to each traveler’s needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            How does SmartStay help me find the right place?
          </AccordionTrigger>
          <AccordionContent>
            SmartStay uses data-driven personalization to match you with hosts
            and spaces that align with your style, preferences, and social
            interests. It’s designed to help you find the perfect fit, whether
            you’re looking for a quiet retreat or a vibrant city stay.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is SmartStay secure?</AccordionTrigger>
          <AccordionContent>
            Yes, your privacy and security are our top priorities. We use
            advanced security measures to protect your information, ensuring a
            safe environment for both guests and hosts.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Who is SmartStay designed for?</AccordionTrigger>
          <AccordionContent>
            SmartStay is ideal for modern travelers seeking more than a typical
            hotel experience. It’s for people who value meaningful travel,
            unique accommodations, and connecting with like-minded individuals.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>How do I book on SmartStay?</AccordionTrigger>
          <AccordionContent>
            Booking is easy! Create an account, browse listings that match your
            preferences, connect with hosts, and secure your stay—all within a
            few clicks.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            Can I list my property on SmartStay?
          </AccordionTrigger>
          <AccordionContent>
            Yes! SmartStay allows you to become a host and share your space with
            travelers who appreciate unique stays. Customize your listing to
            attract guests who align with your property’s vibe.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            Does SmartStay support both short-term and long-term stays?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely. You can find options for weekend getaways, longer
            vacations, and extended stays based on the host’s availability and
            preferences.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>
            How does SmartStay maintain quality and safety?
          </AccordionTrigger>
          <AccordionContent>
            We verify listings and use a review system to maintain high
            standards, ensuring quality stays and trustworthy connections.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger>
            Is SmartStay available internationally?
          </AccordionTrigger>
          <AccordionContent>
            Yes, SmartStay connects travelers and hosts worldwide, making it
            easy to find accommodations in cities across the globe.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
          <AccordionTrigger>
            What sets SmartStay apart from other platforms?
          </AccordionTrigger>
          <AccordionContent>
            SmartStay offers more than just a booking. It’s a personalized
            experience, giving you the chance to stay in spaces that reflect
            your interests and connect with hosts who share your lifestyle.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
