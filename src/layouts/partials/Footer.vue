<template>
  <footer class="bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 py-6">
    <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <accordion class="footer-menu sm:grid sm:flex-row sm:items-start">
        <accordion-item>
          <accordion-header>Legal</accordion-header>
          <accordion-content>
            <footer-link to="/privacy">Privacy Policy</footer-link>
            <footer-link to="/disclaimer">Disclaimer</footer-link>
            <footer-link to="/terms">Terms of use</footer-link>
            <footer-link to="/agreement">User Agreement</footer-link>
          </accordion-content>
        </accordion-item>
        <accordion-item>
          <accordion-header>Project</accordion-header>
          <accordion-content>
            <footer-link to="/about">About</footer-link>
            <footer-link to="/advertise">Advertise</footer-link>
            <footer-link to="/faqs">FAQs</footer-link>
            <footer-link to="https://steemit.com/@steempanel">Blog</footer-link>
          </accordion-content>
        </accordion-item>
        <accordion-item>
          <accordion-header>Resources</accordion-header>
          <accordion-content>
            <footer-link to="https://github.com/steemit/steem">Steem Open-Source</footer-link>
            <footer-link to="https://developers.steem.io/">Developers</footer-link>
            <footer-link to="/api">API</footer-link>
            <footer-link to="/status">Status</footer-link>
          </accordion-content>
        </accordion-item>
        <accordion-item>
          <accordion-header>Useful Links</accordion-header>
          <accordion-content>
            <footer-link to="/news">News</footer-link>
            <footer-link to="/feedback">Feedback</footer-link>
            <footer-link to="/bug/submit">Submit a bug</footer-link>
            <footer-link to="/dapp/submit">Submit a Dapp</footer-link>
          </accordion-content>
        </accordion-item>
        <accordion-item class="footer-area-logo">
          <g-link
            to="/"
            oncontextmenu="return false;"
          >
            <project-logo class="h-8 w-auto text-gray-800 dark:text-gray-300 my-4 sm:mt-0" />
          </g-link>
          <div class="text-gray-500 my-2 text-sm text-center sm:text-left"><span class="text-lg align-middle">©</span> 2021 SteemPanel. All rights reserved.</div>
          <div class="flex justify-center sm:justify-start">
            <g-link
              to="https://discord.gg/b9ycQJC9Sh"
              class="text-gray-400 hover:text-discord-1 transition-colors duration-300"
            >
              <discord-logo class="h-8" />
            </g-link>
          </div>
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
import ProjectLogo from '~/assets/images/steem-logo.svg'
import DiscordLogo from '~/assets/icons/discord.svg'

export default {
  components: {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionContent,
    FooterLink,
    ProjectLogo,
    DiscordLogo
  }
}
</script>
