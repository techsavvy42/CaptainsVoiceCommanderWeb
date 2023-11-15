# Captains Voice Commander

![Captains Voice Commander Logo](./public/logo/logo.svg)

Introducing Captain's Voice Commander – the ultimate communication solution tailored for Star Citizen organizations. Say goodbye to the complexities and costs associated with modern communication platforms like Discord. Our platform is designed specifically for Star Citizen, offering a streamlined and cost-free alternative for organizations to connect seamlessly. Here's why Captain's Voice Commander is the ideal choice:

- Organized Collaboration for Star Citizen:
Crafted with Star Citizen organizations in mind, Captain's Voice Commander ensures efficient and tailored communication for your team.

- No Cost, No Compromises:
Enjoy crystal-clear communication without the burden of subscription fees. Say farewell to costly services for 4K streaming or full streaming capabilities.

- Game-Centric Focus:
Captain's Voice Commander is purpose-built for Star Citizen with efficency, eliminating the need for excessive features and telemetry that could impact gaming performance.

- Independent Operation:
Empower your organization to communicate seamlessly without relying on external technologies. Captain's Voice Commander is your self-sufficient solution.
Unleash the power of Captain's Voice Commander for your Star Citizen organization – communication that's efficient, game-centric, and free from the constraints of modern technology expenses.

## How to

Access the platform by navigating to https://chat-test-nine-psi.vercel.app/ and enter a designated room for communication with fellow users. Note that these rooms are assigned random UUIDs, generated on the client side by default.

For confidential exchanges, opt for one of these randomly assigned rooms and share the URL using the "🔗" button at the page's top.

## Advanced Functionalities

- Peer Multiplicity in Rooms:
Accommodating a multitude of peers per room, the limit dictated solely by your browser's capacity for peer connections.

- Diverse Room Types:
Provision of both public and private rooms to cater to varied user preferences.

- Comprehensive Audio-Visual Capabilities:
Seamless integration of video and audio chatting features for a holistic communication experience.

- Cutting-Edge Screen Sharing:
Robust screen-sharing functionality, empowering users with advanced collaborative capabilities.

- Rich Text Formatting with Markdown:
Incorporation of react-markdown for Markdown support, including syntax highlighting for code segments.

- Dynamic Backfilling of Conversations:
Intelligent conversation backfilling from peers when a new participant enters the room, ensuring a comprehensive communication history.

- Advanced Message Composition:
Multiline message support, achieved by holding shift and pressing enter for enhanced messaging versatility.

- Dual Visual Themes:
Aesthetic customization with dark and light themes, catering to diverse user preferences.

## Counteractive Features

- Non-Persistence of Messages:
Messages undergo no disk persistence. Upon exiting a peer room, messages are systematically erased from memory, rendering retrieval impossible.

- Exclusively Client-Side Architecture:
Captains Voice Commander operates as a wholly client-side communication application. It relies on public WebTorrent servers for peer connections and employs STUN/TURN relay servers when direct peer-to-peer connections face hindrances. Notably, there is no Captains Voice Commander API server in the equation.

- Absence of Analytics, Tracking, or Telemetry:
A staunch commitment to user privacy is upheld through the complete omission of analytics, tracking, or any form of telemetry.

- Community-Driven and Unfunded Nature:
This project thrives as a community-driven and unfunded initiative, devoid of any profit motive. User satisfaction takes precedence, with no external corporate influence or financial interests involved.

## The Rationalization for an Alternate Chat Platform in the Star Citizen Universe

In the vast expanse of user-friendly chat applications, a distinct void is perceived, particularly within the intricate cosmos of Star Citizen. Conventional platforms rely on centralized services for communication facilitation, thereby raising formidable trust concerns. The omnipresent influence of commercial agendas, coupled with potential susceptibility to governmental pressures, introduces an unsettling dynamic wherein service operators may find themselves at odds with the paramount interests of the user community. Even in instances where user data is ostensibly managed with integrity, the specter looms that encrypted data at rest may succumb to unwarranted decryption against the user's volition.

Captains Voice Commander, strategically crafted for the Star Citizen milieu, ingeniously navigates these precarious pitfalls through the implementation of a web meshe architecture. It boldly eliminates the dependence on a central service operator, alleviating concerns of potential data mishandling or compromise. While certain services play a pivotal role in establishing initial peer connections, the application seamlessly transitions into a paradigm of direct peer-to-peer communication, eradicating any residual vulnerabilities. Notably, any services engaged by Captains Voice Commander maintain an arms-length distance from the project, ensuring their public accessibility and detachment from project affiliations.

## Scenarios of Application

Captains Voice Commander unfolds as a clandestine and impervious recourse for a myriad of purposes:

- Organizational Cohesion:
Uniting cohorts within unions or political movements, fostering secure and confidential communication channels.

- Efficient Data Transference:
Facilitating the seamless exchange of textual or data elements between disparate devices, ensuring expediency.

- Cross-Platform Video Conferencing:
Enabling video conversations with acquaintances and family members, harmoniously spanning diverse operating systems like Android and iOS.

- IT Expedition through Screen Sharing:
Streamlining information technology troubleshooting endeavors through the integration of screen-sharing functionalities.

- Dynamic Livestreaming:
Amplifying the realm of possibilities with integrated livestreaming capabilities, transcending conventional communication boundaries.

- Secure Information Propagation:
Safeguarding the conveyance of sensitive data, including passwords, with an overarching commitment to security and privacy.

- Endless Possibilities:
Unleashing a spectrum of potentialities, extending beyond the enumerated instances, to cater to an array of diverse user needs.

##### Issues specific to browsers with ad blocking extensions

Some ad blockers (such as uBlock Origin) prevent connections to certain WebTorrent servers. This prevents Captains Voice Commander peers from connecting.

##### Issues specific to Firefox

check your `about:config` settings and ensure that `media.peerconnection.enabled` is **enabled**.

## ⚠️ [Disclaimer](https://chat-test-nine-psi.vercel.app/disclaimer)

By using Captains Voice Commander, you agree to accept **full responsibility** for your actions related to its use. Additionally, you agree **not** to hold any contributors to the Captains Voice Commander project responsible for any result of your use of it. The developers of Captains Voice Commander do not endorse illegal activity.
