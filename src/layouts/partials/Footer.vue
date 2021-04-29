<template>
  <footer class="bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 pt-6">
    <div class="px-4 md:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <accordion class="footer-menu sm:grid sm:flex-row sm:items-start">
        <accordion-item>
          <accordion-header>Project</accordion-header>
          <accordion-content>
            <div>About</div>
            <div>FAQs</div>
            <div>Blog</div>
            <div>Contact</div>
          </accordion-content>
        </accordion-item>
        <accordion-item>
          <accordion-header>Resources</accordion-header>
          <accordion-content>
            <div>Steem Open-Source</div>
            <div>Developers</div>
            <div>API</div>
            <div>Status</div>
          </accordion-content>
        </accordion-item>
        <accordion-item>
          <accordion-header>Useful Links</accordion-header>
          <accordion-content>
            <footer-link to="/news/">News</footer-link>
            <div>Feedback</div>
            <div>Submit a bug</div>
            <div>Submit a Dapp</div>
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
