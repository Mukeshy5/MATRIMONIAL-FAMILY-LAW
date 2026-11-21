import Icon from '../Components/Icon.jsx'
import Seo from '../Components/Seo.jsx'
import { advocate } from '../data/advocate.js'
import { PageHero } from './Shared.jsx'

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo title="Privacy Policy" description="How this static website handles contact enquiries and third-party services." path="/privacy-policy/" />
      <PageHero eyebrow="PRIVACY" title="Privacy policy." description="A clear explanation of this static website’s contact flow and how personal information may be handled." breadcrumbs={[{ label: 'Privacy policy' }]} />
      <section className="content-section section-pad"><div className="container policy-content">
        <p className="policy-updated">Policy owner: {advocate.name} · Effective date: To be confirmed before publication</p>
        <p>This website is a static information site. It has no account system, database or server-side enquiry form. The policy must be updated and verified by the advocate before the website is published.</p>
        <section><h2>Information you choose to provide</h2><p>The contact form asks for your name, phone number, email address, city or state, matter type, preferred contact method and a short description. The form validates these fields in your browser and prepares a draft email using your email application. The website itself does not submit or store that enquiry.</p><p>If you choose to send the draft, your email provider and the office will receive and handle its contents. Email may not be a secure channel. Do not include Aadhaar, PAN, bank information, passwords or intimate personal information in the form.</p></section>
        <section><h2>Purpose and use</h2><p>Information in an enquiry may be used by the office to respond, check availability and decide whether to discuss a consultation. The advocate should describe the office’s actual review, conflict-check, confidentiality and engagement processes before publication. Sending an enquiry does not create an advocate-client relationship.</p></section>
        <section><h2>Hosting, cookies and analytics</h2><p>This website does not intentionally set analytics or advertising cookies and has no analytics integration configured. The website host may process limited technical information such as connection or access logs under its own terms. Review the chosen hosting provider’s current privacy terms before deployment.</p><p>The site loads Inter and Playfair Display font files from Google Fonts. The font provider may receive technical connection information from your browser under its own terms. If a real office address is configured, a Google Maps embed may also load third-party content. The embed is omitted until an office address is supplied.</p></section>
        <section><h2>Data retention and security</h2><p>The website does not retain form submissions because it does not receive them. If you send an email, the office’s email systems and record-retention practices apply. The advocate should add the office’s retention period and safeguards after confirming its actual procedures.</p></section>
        <section><h2>Security</h2><p>The static contact flow does not upload form entries to this website. Information sent through your email application is subject to your email provider’s security and the office’s systems. Do not send sensitive records unless the office has confirmed an appropriate channel.</p></section>
        <section><h2>Your privacy requests</h2><p>For questions or requests about information you sent to the office, contact {advocate.name} using the verified email address or phone number published on this site. Add and confirm those contact details before publication.</p></section>
        <section><h2>Changes to this policy</h2><p>This page should be updated if the site adds a form provider, analytics, cookies, maps, social media embeds or another service that processes visitor information. The effective date should be updated whenever the policy changes.</p></section>
        <div className="policy-callout"><Icon name="shield" size={20} /><p>Privacy statement prepared for a static frontend. The advocate must confirm the office’s actual practices and review this policy before publication.</p></div>
      </div></section>
    </>
  )
}

export function DisclaimerPage() {
  return (
    <>
      <Seo title="Website Disclaimer" description="Legal information, no-advice and no-relationship disclaimer for this family-law information website." path="/disclaimer/" />
      <PageHero eyebrow="IMPORTANT INFORMATION" title="Website disclaimer." description="Please read this notice before relying on any information on this website." breadcrumbs={[{ label: 'Disclaimer' }]} />
      <section className="content-section section-pad"><div className="container policy-content">
        <div className="disclaimer-quote"><p>“Information provided on this website is for general informational and educational purposes only. It does not constitute legal advice or create an advocate-client relationship. Viewing this website or submitting an enquiry does not establish an advocate-client relationship. No particular legal outcome or timeline is guaranteed.”</p></div>
        <section><h2>General information, not legal advice</h2><p>Family and matrimonial law may depend on the law governing a marriage, the state, court procedure and individual facts. Laws and procedures can change. Do not rely on a website page as legal advice or as a substitute for reviewing your circumstances with a qualified advocate.</p></section>
        <section><h2>No advocate-client relationship</h2><p>Viewing the website, following a link or preparing or sending an enquiry does not by itself create an advocate-client relationship. The office must separately confirm whether it can act and any engagement must be governed by the applicable professional process.</p></section>
        <section><h2>No guarantee</h2><p>Past experience or general information cannot guarantee a legal outcome, interim order, hearing date or case duration. Results depend on the law, evidence, court directions and facts of each matter.</p></section>
        <section><h2>Accuracy and external links</h2><p>Reasonable care should be taken to review the content, but it may not cover every legal development or local procedure. External websites are provided for convenience; their content and privacy practices are outside this site’s control.</p></section>
        <section><h2>Professional conduct and publication</h2><p>The Bar Council of India Rules regulate advocate advertising and solicitation. <a href="https://www.barcouncilofindia.org/info/rules-on-an-advocates-duty-towards-the-court" target="_blank" rel="noreferrer">Rule 36 in the Bar Council of India Rules</a> contains a limited provision for website particulars subject to intimation to and approval by the Bar Council of India. A <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2043470&amp;lang=2&amp;reg=3" target="_blank" rel="noreferrer">Ministry of Law and Justice release</a> restates the prohibition on advertising or soliciting work. The advocate should verify that this site’s content, enquiry form and calls to action comply with current requirements before publication.</p></section>
        <section><h2>Urgent safety concerns</h2><p>This website is not an emergency channel. If you are in immediate danger, contact local emergency services or police.</p></section>
      </div></section>
    </>
  )
}
