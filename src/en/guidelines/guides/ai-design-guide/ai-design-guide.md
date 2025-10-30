---
layout: page.njk
tags: level3
key: ai_design_grundlagen_en
title: "AI Design: Basics"
parent: guides_en
order: 20
eleventyExcludeFromCollections: false
---

Artificial Intelligence (AI) offers the opportunity to meet more user requirements than ever before. However, individual needs and contexts remain diverse, which is why there is no ‘one-fits-all’ solution to designing interactions with AI. In order for users to fully exploit the potential of AI, we need to design interactions in a conscious and user-centric manner. Our [Design Principles](/en/principles/ux-principles/overview/) also apply here.
<br>

<sbb-link-list-anchor>
  <sbb-block-link href="/en/guidelines/guides/ai-design-guide/#integration-of-ai-into-the-system">Integration of AI into the system</sbb-block-link>
  <sbb-block-link href="/en/guidelines/guides/ai-design-guide/#challenges-for-users">Challenges for users</sbb-block-link>
  <sbb-block-link href="/en/guidelines/guides/ai-design-guide/#augmentation-vs.-automation">Augmentation vs. automation</sbb-block-link>
  <sbb-block-link href="/en/guidelines/guides/ai-design-guide/#design-patterns">Design Patterns</sbb-block-link>
</sbb-link-list-anchor>

## Integration of AI into the system
If we want to make AI available to customers or employees, we need to think about the role of AI in the system. The following dimensions help here:

1. **Scope:** How much of the system is supported by AI? Is it an individual component, a flow, a feature, an application or an entire platform?

2. **Space:** How is the AI presented in relation to functionality? Does it occupy the centre or is it just a small UI element? Is it visible or is it running in the background? If visible: permanently or only on request?

3. **Functionality:** How does the AI interact with existing functions? Can it access other information or is it functionally isolated? Is the model run statically or is it continuously adapted with new data and interfaces?

Clear planning of these dimensions helps to design the user experience for customers or employees in the best possible way. <br>

In addition to UX topics, other aspects are of course central to the design, such as the brand experience and data protection and data security. The latter are governed by internal guidelines and external legislation. You can also find guidelines on the use and labelling of the Generative AI sub-area on the [SBB Brand Portal](https://brand.sbb.ch/document/6#/digital/artificial-intelligence). 


## Challenges for users
There are different types of AI systems (e.g. Large Language Models (LLMs), Machine Learning, Reinforcement Learning, ...). They are suitable for different, complex use cases, such as pattern recognition and the generation of text, image and speech or the prediction of events. While AI systems offer many opportunities, they also present challenges for users: 

* Transparency and explanability: Users cannot easily understand how it works and are therefore often referred to as a black box. Designing the explanability, i.e. why a system makes which suggestion, is key to successful use.
* Probabilistic and self-learning AI systems: AI systems answer based on probabilities. AI systems use feedback through use to optimise themselves. As a result, they do not always give the same answer and change over time.
* Errors, e.g. hallucinations: The results are not always correct and must be checked. 

The key issue for us is to design the interaction between humans and the AI system in such a way that customers or employees achieve their goals and also have reasonable confidence in the results of the AI. 


## Augmentation vs. automation 
AI can add value, especially in monotonous routine tasks, by taking over people’s work and carrying it out autonomously (automation), thus increasing efficiency. However, since AI also makes mistakes (see above), it is important to leave the decision to a human being in complex, uncertain or highly responsible contexts. In these cases, AI can support people (augmentation) with recommendations and suggestions. These should be understandable and comprehensible to people and users should be able to influence or override them. As a general rule, the higher the risk and uncertainty, the more augmentation is suitable; in the case of low risk and well-defined tasks, automation is more suitable.

In fact, many systems are hybrids: human-in-the-loop (MITL) for critical decisions, human-on-the-loop (MOTL) for surveillance, human-in-command for strategic control. 

In practice, an iterative approach is often worthwhile: Start with augmentation and then automate slowly, selectively if trust and performance are high enough.


## Design Patterns
When designing AI systems, proven design solutions have become established that help create consistent and user-friendly applications. Check out our [Patterns](/en/design-system/patternlibrary/overview/). 