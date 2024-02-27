import PageHeading from "@/components/PageHeading";
import HeaderMobile from "@/views/HeaderMobile";
import ContactSect from "@/views/contact/ContactSect";

function Contact() {
  return (
    <>
      <HeaderMobile />
      <section className="max-w-[1200px] md:px-20 p-5 m-auto">
        <PageHeading backText="CONTACT" main="GET IN TOUCH" />
        <ContactSect />
      </section>
    </>
  );
}

export default Contact;
