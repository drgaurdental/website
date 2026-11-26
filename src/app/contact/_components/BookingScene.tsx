"use client";

import { Stage } from '@/components/stageshow/stage'
import type { Act } from '@/components/stageshow/act'
import { Phone } from '@/components/stageshow/phone'
import { Thread, Bubble, Stamp, Receipt } from '@/components/stageshow/messages'
import { Avatar } from '@/components/stageshow/parts/Avatar'
import './booking-demo.css'

// What happens after a patient presses "Send request on WhatsApp": the chat
// opens with their details already written, they tap send, and the clinic
// replies with a confirmed time. Plays once when scrolled into view.

type S = { draft: boolean; sent: boolean; delivered: boolean; read: boolean; typing: boolean; reply: boolean }
const initial: S = { draft: true, sent: false, delivered: false, read: false, typing: false, reply: false }
// Reduced motion and thumbnails show the confirmed booking
const poster: S = { draft: false, sent: true, delivered: true, read: true, typing: false, reply: true }

const REQUEST = [
  'Hello, I would like to book an appointment.',
  'Name: Riya Sharma',
  'Treatment: Teeth cleaning',
  'Preferred: Tomorrow morning',
]

function RequestLines() {
  return (
    <>
      {REQUEST.map((line) => (
        <span key={line} className="bk-line">
          {line}
        </span>
      ))}
    </>
  )
}

async function script(a: Act<S>) {
  await a.wait(1100)
  await a.click('send')
  // Clear the field in the same update that adds the bubble: the words lift out of it
  await a.set({ sent: true, draft: false })
  await a.wait(700)
  await a.set({ delivered: true })
  await a.wait(900)
  await a.set({ read: true })
  await a.wait(600)
  await a.set({ typing: true })
  await a.wait(1700)
  await a.set({ typing: false, reply: true })
  a.mark('reply')
  await a.wait(2600)
}

function ArrowUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path d="M8 13V3.5M3.5 7.5 8 3l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function BookingScene() {
  return (
    <Stage
      width={480}
      height={480}
      compact={{ below: 440, width: 358, height: 390 }}
      initial={initial}
      poster={poster}
      script={script}
      play="once"
      cursor={{ at: 'send', style: 'touch' }}
      className="bk"
    >
      {(s, _rect, layout) => (
        <Phone width={layout === 'compact' ? 326 : 400} className="bk-phone">
          <div className="bk-head">
            <Avatar name="Gaur Dental" tone="ios" size={52} className="bk-avatar" />
            <span className="bk-name">Dr. Gaur Dental Hospital</span>
          </div>
          <Thread className="bk-thread">
            <Bubble from="them">Thanks for visiting Dr. Gaur Dental Hospital! See you at your next check-up.</Bubble>
            <Stamp>Today 9:41 AM</Stamp>
            {s.sent && (
              <Bubble from="me" source="draft">
                <RequestLines />
              </Bubble>
            )}
            <Receipt show={s.delivered}>{s.read ? 'Read 9:41 AM' : 'Delivered'}</Receipt>
            {(s.typing || s.reply) && (
              <Bubble from="them" typing={s.typing}>
                Booked! See you tomorrow at 10:30 AM, Riya.
              </Bubble>
            )}
          </Thread>
          <div className="bk-compose">
            <span className="bk-plus" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 2.5v11M2.5 8h11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="bk-field" data-full={s.draft ? '' : undefined}>
              <span className="bk-field__text" data-target="draft">
                {s.draft && <RequestLines />}
              </span>
              <span className="bk-field__ph" data-hide={s.draft ? '' : undefined}>
                Message
              </span>
              <span className="bk-send" data-target="send" data-show={s.draft ? '' : undefined}>
                <ArrowUp />
              </span>
            </span>
          </div>
        </Phone>
      )}
    </Stage>
  )
}
