<template>
  <footer class="bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 pt-6">
    <div class="px-4 md:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <accordion class="footer-menu sm:grid sm:flex-row sm:items-start">
        <accordion-item>
          <accordion-header>Project</accordion-header>
          <accordion-content>
            <footer-link to="/about/">About</footer-link>
            <footer-link to="/advertise/">Advertise</footer-link>
            <footer-link to="/faqs/">FAQs</footer-link>
            <footer-link to="https://steemit.com/@steempanel">Blog</footer-link>
          </accordion-content>
        </accordion-item>
        <accordion-item>
          <accordion-header>Resources</accordion-header>
          <accordion-content>
            <footer-link to="https://github.com/steemit/steem">Steem Open-Source</footer-link>
            <footer-link to="https://developers.steem.io/">Developers</footer-link>
            <footer-link to="/api/">API</footer-link>
            <footer-link to="/status/">Status</footer-link>
          </accordion-content>
        </accordion-item>
        <accordion-item>
          <accordion-header>Useful Links</accordion-header>
          <accordion-content>
            <footer-link to="/news/">News</footer-link>
            <footer-link to="/feedback/">Feedback</footer-link>
            <footer-link to="/bug/submit">Submit a bug</footer-link>
            <footer-link to="/dapp/submit/">Submit a Dapp</footer-link>
          </accordion-content>
        </accordion-item>
        <accordion-item class="footer-area-legal">
          <accordion-header>Logo</accordion-header>
          <accordion-content />
        </accordion-item>
      </accordion>
    </div>
  </footer>
</template>

<script>
import Accordion from '~/components/Accordion/Accordion'
import AccordionItem from '~/components/Accordion/AccordionItem'
import AccordionHeader from '~/components/Accordion/AccordionHeader'
import AccordionContent from '~/components/Accordion/AccordionContent'
import FooterLink from '~/components/links/FooterLink'
import DiscordLogo from '~/assets/icons/discord.svg'

export default {
  components: {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionContent,
    FooterLink,
    DiscordLogo
  }
}
</script>
