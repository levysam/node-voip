<template>
  <q-page class="row items-center justify-evenly">
    <audio ref="audioElement"></audio>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Inviter, SessionState, UserAgent } from 'sip.js'

export default defineComponent({
  name: 'IndexPage',

  mounted () {
    const userAgent = new UserAgent({
      uri: UserAgent.makeURI('sip:alice@example.com'),
      transportOptions: {
        server: 'wss://localhost:8089/ws'
      }
    })

    userAgent.start().then(() => {
      const target = UserAgent.makeURI('sip:1060@localhost')
      if (!target) {
        throw new Error('Failed to create target URI.')
      }

      const inviter = new Inviter(userAgent, target, {
        sessionDescriptionHandlerOptions: {
          constraints: { audio: true, video: false }
        }
      })

      // Handle outgoing session state changes
      inviter.stateChange.addListener((newState) => {
        switch (newState) {
          case SessionState.Establishing:
            console.log(newState)
            break
          case SessionState.Established:
            console.log(newState)
            // Session has been established
            break
          case SessionState.Terminated:
            console.log(newState)
            // Session has terminated
            break
          default:
            console.log(newState)
            break
        }
      })

      // Send initial INVITE request
      inviter.invite()
        .then(() => {
          // INVITE sent
        })
        .catch((error: Error) => {
          console.log(error)
        })
    })
  }
})
</script>
