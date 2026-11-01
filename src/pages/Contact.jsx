import TextDipserse from "../comps/TextDipserse/TextDipserse";

function Contact() {
  return (
    <main>
      <div className="dipserse-list">
        <div>
          <p>Juliette</p>
          <p>De Meo</p>
        </div>
        <div>
          <p>web</p>
          <p>developer</p>
        </div>
        <TextDipserse
          href="mailto:gigialiasjuliette@gmail.com"
          className="email-desktop"
        >
          <p>gigialiasjuliette@gmail.com</p>
        </TextDipserse>
        <TextDipserse
          href="mailto:gigialiasjuliette@gmail.com"
          className="email-phone"
        >
          <p>→ Email</p>
        </TextDipserse>
        <div>
          <TextDipserse href="https://discord.com/users/1005056742050234408">
            <p>→ Discord</p>
          </TextDipserse>
          <TextDipserse href="https://www.linkedin.com/in/gigijuliette/">
            <p>→ LinkedIn</p>
          </TextDipserse>
        </div>
      </div>
    </main>
  );
}

export default Contact;
