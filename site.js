// Single place for the contact address shown on the legal/support pages.
// Replace before launch if the studio uses a different inbox.
const CONTACT_EMAIL = "akeshidewmini7@gmail.com";

document.querySelectorAll("[data-contact]").forEach((el) => {
  const subject = el.getAttribute("data-subject");
  if (el.tagName === "A") {
    el.href = "mailto:" + CONTACT_EMAIL + (subject ? "?subject=" + encodeURIComponent(subject) : "");
  }
  if (!el.textContent.trim()) el.textContent = CONTACT_EMAIL;
});
