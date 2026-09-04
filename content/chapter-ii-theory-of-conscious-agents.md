# Chapter II — The Theory: What Is a Conscious Agent?

*An extended, paper-grounded companion to Part II of [`conscious-agents-zero-to-hero.md`](conscious-agents-zero-to-hero.md). Every claim below is traced to a specific paper in [`papers/`](../papers/), cited by bib key against [`hoffman_conscious_agents.bib`](../papers/hoffman_conscious_agents.bib); full citation data is in [`references_report.md`](../papers/references_report.md). Primary sources for this chapter: `hoffman2014objects` (Hoffman & Prakash, *Objects of Consciousness*, 2014), `fields2018conscious` (Fields, Hoffman, Prakash & Singh, *Conscious agent networks*, 2018), `hoffman2015origin` (Hoffman, *The Origin of Time in Conscious Agents*, 2015), `mark2010natural` (Mark, Marion & Hoffman, *Natural selection and veridical perceptions*, 2010), and `prakash2020fact` (Prakash, Fields, Hoffman, Prentner & Singh, *Fact, Fiction, and Fitness*, 2020).*

As in the parent document, claims are tagged:

> 🟢 **SOLID** — an actual theorem or proof, checkable by direct computation.
> 🟡 **SKETCH** — a real mathematical construction, proposed/conjectural as an account of consciousness or physics.
> 🔴 **ASPIRATION** — a stated goal, not yet mathematics.

---

## 1. Why start over? The motivating claim, in full rigor

The zero-to-hero tutorial compresses Hoffman's motivating argument into four bullet points (§10). Those bullets are the *conclusion* of a specific, checkable technical program: evolutionary game theory applied to perception. This section reconstructs that program from the primary sources, because the entire theory of conscious agents is a response to what these results force upon us — it is not a free-standing metaphysical preference.

### 1.1 The default assumption, stated precisely

Nearly every standard theory of perception — ecological optics, Bayesian estimation theory, computational vision — shares an unstated premise: that a species-specific perceptual system, shaped by natural selection, will *converge toward accuracy*. Steven Palmer's textbook formulation, quoted in both `hoffman2014objects` and `hoffman2015origin`, is representative: "vision is useful precisely because it is so accurate... By and large, what you see is what you get" (Palmer 1999, quoted in `hoffman2014objects` §1, `hoffman2015origin` §3). Pizlo and colleagues go further: "veridicality is an essential characteristic of perception and cognition... Perception and cognition without veridicality would be like physics without the conservation laws" (quoted in `hoffman2015origin` §3, and again in `hoffman2023fusions` §3 as recently as 2023 — this is a live disagreement, not a settled historical debate).

The informal argument behind this intuition runs: organisms whose perceptions were more accurate had a competitive edge over those whose perceptions were less accurate; therefore the genes coding for more-accurate perception were more likely to propagate; therefore, after many generations, our perceptions should approximate truth (`hoffman2014objects` §2). This is intuitively compelling. It is also, as stated, an empirical claim about the mathematics of natural selection — and mathematics is exactly what evolutionary game theory can check.

### 1.2 A taxonomy of perceptual strategies

Before you can ask "does selection favor truth?", you need a precise notion of what "truth" *means* for a perceptual strategy. `mark2010natural` §2 supplies one, building a nested hierarchy of four strategy classes. Let $W$ be a measurable space representing the objective world (with structure-relation map $\psi$), and $X$ a measurable space representing an organism's possible perceptions (with structure-relation map $f$). A **perceptual strategy** is a map $g: W \to X$.

- **Naive realism**: $X = W$, $f = \psi$, and $g$ is a *bijection*. Perception is a lossless mirror of reality — the strongest possible claim.
- **Strong critical realism**: $X \subseteq W$, $f = \psi|_X$, and $g|_X$ is a bijection. Perception faithfully mirrors *some part* of reality (e.g., we see visible light, not X-rays, but what we see of visible light is exact).
- **Weak critical realism**: $X$ need not be a subset of $W$, but $g$ is a *homomorphism* — relationships among perceptions ($f$) still reflect relationships among aspects of reality ($\psi$), even though the perceptions themselves need not resemble anything in $W$. This is the view "favored by most perceptual researchers" (`mark2010natural` §2) — it is the view implicit in claims like "perceived brightness order matches true luminance order," even when perceived brightness numbers don't match physical luminance numbers.
- **Interface (desktop) strategy**: $X$ need not be a subset of $W$, and $g$ need *not* be structure-preserving at all. Nothing about $X$'s internal relationships need reflect $W$'s internal relationships.

These four classes nest: naive realist $\subset$ strong critical realist $\subset$ weak critical realist $\subset$ interface (`mark2010natural` Fig. 1; the same hierarchy reappears verbatim in `hoffman2014objects`'s Objection 12 reply, confirming it is the authors' standard formal vocabulary for "veridicality," not an ad hoc gloss). The question "does natural selection favor veridical perception?" is now precise: which of these four classes does selection favor, as fitness landscapes vary?

### 1.3 A worked evolutionary game, in closed form

`mark2010natural` §3–4 gives an evolutionary game simple enough to solve exactly, and it is worth reconstructing because it makes the abstract claim "truth can lose" into arithmetic you can check.

**Setup.** An infinite population of agents is paired at random to play a two-player game. The world has three territories $T_1, T_2, T_3$; each contains a single resource ("food") whose quantity is drawn uniformly and independently from $V = \{1, \dots, m\}$. Whichever territory an agent selects, its quantity of food *becomes the agent's fitness*. Two perceptual strategies compete:

- **truth**, a naive realist strategy: $Y = W$, sees the exact food value in every territory, and picks the best one.
- **simple**, a critical realist strategy: perceives only a binary category per territory — "green" if food $> b$ for some boundary $b$, "red" otherwise — and picks a green territory if one exists (at random among ties), else picks at random.

Seeing more data costs more time; in the base version of the game, whichever strategy sees less goes first (so **simple** moves first against **truth**). This cost is the whole mechanism: it is not that truth is *wrong* about the world (by construction, truth's percept literally *is* the food value), but that truth's data-gathering overhead can outweigh what perfect information buys it.

**Simple's expected payoff.** Let $\Pr(G_0) = (b/m)^3$ be the probability all three territories are red, and $\Pr(G_{123}) = 1 - \Pr(G_0)$ the probability at least one is green. Because food is uniform on $[1,b]$ in red territories and on $[b+1,m]$ in green territories, the conditional expectations are
$$
\mathbb{E}[v \mid R] = \frac{b+1}{2}, \qquad \mathbb{E}[v \mid G] = \frac{m+b+1}{2}.
$$
Simple, choosing first, gets
$$
E_S^{(1)}(v \mid b, m) = \Pr(G_0)\cdot\frac{b+1}{2} + \Pr(G_{123})\cdot\frac{m+b+1}{2}. \tag{mark2010natural, Eq. 7}
$$
Differentiating with respect to the boundary $b$ and setting the derivative to zero gives the fitness-maximizing threshold

$$
b^* = \frac{m}{\sqrt{3}}.
$$

This is already a small, striking fact: the optimal *perceptual category boundary* for "simple" is not at the midpoint of the range, nor at some value tied to any intrinsic property of food — it falls out purely of the combinatorics of order statistics over three territories. Move to two territories or five, and $b^*$ moves too. The boundary is not "carving reality at a joint"; it is tuned to the geometry of the *decision task*.

**Comparing to truth.** `mark2010natural` §4.2 computes truth's expected payoff using order statistics: for $j$ red and $k$ green territories, the $r$-th order statistic of a sample from $[1,b]$ or $[b+1,m]$ has a computable expectation (Eqs. 13–14), which lets you write $E_T$ as an explicit function of $b, m$ and the energetic cost truth pays for its finer-grained percept. The paper's conclusion, verified both in closed form for this game and via Monte Carlo across "hundreds of thousands of randomly chosen worlds" (`hoffman2014objects` §2, citing `mark2010natural`, Mark 2013, and Marion 2013): **when information costs time or energy, the interface strategy "simple" can and does drive the naive-realist strategy "truth" to extinction, even though truth's percept is by definition never mistaken about the world.**

This is the mechanism behind the tutorial's compressed §10 point 1. It is not that evolution is "sloppy" about truth; it is that a perceptual system pays for every bit of resolution it carries, in both time and calories, and if the fitness landscape does not require that resolution, paying for it is a pure loss.

### 1.4 Why this is generic, not a corner case: four theorems

A skeptic might reasonably object: fine, in *this* game, with *this* fitness function, truth loses. Maybe with better-behaved (monotonic) fitness functions, truth wins? `prakash2020fact` closes this escape route by proving that non-monotonic, non-structure-preserving fitness functions are not a special case to be worried about — they are *generic*, in the precise measure-theoretic sense.

**The general setup.** A fitness (payoff) function is $f: W \to V$, assigning one of $m$ payoff values to each of $n$ world states. `prakash2020fact` restricts attention to *admissible* payoff functions — those achieving the maximum payoff value for at least one world state, since a payoff function that never rewards anything cannot drive selection. Counting: the total number of functions $W \to V$ is $m^n$; the number that *never* hit the top value is $(m-1)^n$; so the number of admissible functions is
$$
m^n - (m-1)^n.
$$
The paper then asks, for four different structures a perceiver might hope its perceptions preserve, what fraction of admissible payoff functions are **homomorphisms** of that structure — i.e., preserve it faithfully, in the weak-critical-realist sense of §1.2 above.

| Structure | Theorem (paraphrased with the exact count) | Perceptual analogue |
|---|---|---|
| **Total orders** | Number of homomorphic admissible payoffs is $2\binom{n+m-2}{m-1}$; ratio to all admissible payoffs $\to 0$ as $n\to\infty$ for fixed $m$, and even if $m$ grows at the same rate as $n$. | Perceiving magnitudes (e.g. sound intensity, brightness) in their true rank order. |
| **Permutation (symmetric) groups $S_n$** | Number of homomorphisms is $2n + n!$; ratio to admissible payoffs $\dfrac{2n+n!}{n^n-(n-1)^n} \to 0$ as $n \to \infty$. | Perceiving rearrangements/permutations of objects veridically. |
| **Cyclic groups** | Number of homomorphisms equals $\gcd(m,n)$; ratio $\to 0$ as $n\to\infty$, $m\le n$. | Perceiving rotational/translational symmetries. |
| **Measurable spaces** (order $k$) | Number of measurable (probability-preserving) functions bounded by $m^{k-1} + \frac{m}{m-1}\left(\frac{k-1}{m}\right)(m-1)^n$; ratio $\to 0$ for most $k$ as $n\to\infty$. | Perceiving probability distributions/likelihoods veridically. |

(All four results and their proofs: `prakash2020fact` §4, Appendices A.2–A.5.)

The word **generically** in the phrase "natural selection generically favors non-veridical perception" is a technical term borrowed from measure theory, and `hoffman2014objects`'s reply to Objection 13 spells it out with a clean analogy: a random point in the plane generically has a nonzero $y$-coordinate, even though the set of points *with* zero $y$-coordinate (the $x$-axis) is infinite. "Generic" means "true except on a measure-zero set," not "true always." This distinction matters, because it means the theory does *not* claim that no perceptual system could ever track truth — only that, absent a special reason (a fitness function that happens to be monotonic in some world structure), truth-tracking is the exception, not the rule, and the "smart money" bets against it (`hoffman2014objects`, reply to Objection 13).

**A tiny numeric check.** Take $n = 3$ world states, $m = 2$ payoff values. Admissible payoff functions: $2^3 - 1^3 = 7$ (everything except the all-zero function). Total-order homomorphisms: $2\binom{3+2-2}{2-1} = 2\binom{3}{1} = 6$. So even at this tiny scale, $6/7 \approx 0.857$ of admissible payoffs *are* order-homomorphisms — truth-tracking is still common when $n,m$ are small. The theorem's content is entirely in the *limit*: push $n \to \infty$ holding $m$ fixed (or growing at the same rate), and this fraction provably collapses to zero. This is worth sitting with, because it shows the theorem is a genuine asymptotic statement, not a trivial one — small worlds are forgiving; the richer and more fine-grained the world an organism must navigate, the more punishing the divergence between fitness and truth becomes.

### 1.5 A second, independent motivation: physics agrees

`hoffman2023fusions` §2 makes a case, independent of evolutionary biology, that space-time itself cannot be the bedrock the naive-realist assumption needs. Two arguments, reconstructed:

**Argument 1 (measurement resolution vs. gravity).** To resolve smaller objects you need shorter-wavelength radiation. Quantum theory ties wavelength to energy,
$$
E = \frac{hc}{\lambda}, \tag{1}
$$
so probing smaller scales costs more energy. But mass-energy curves spacetime ($E = mc^2$, Eq. 2), and as $\lambda$ approaches the Planck length the concentrated energy curves spacetime enough to form a black hole, destroying the very object you tried to measure. Pushing harder just makes a bigger black hole. Hence: no operational meaning attaches to distances below the Planck scale (`hoffman2023fusions` §2).

**Argument 2 (measuring devices are physical systems too).** Any measuring apparatus is itself subject to the energy-time and position-momentum uncertainty relations,
$$
\Delta E \, \Delta t \geq \frac{h}{4\pi}, \qquad \Delta x \, \Delta p \geq \frac{h}{4\pi}. \tag{3, 4}
$$
Improving the device's precision requires adding degrees of freedom, which adds mass, which — again — eventually collapses the device into a black hole and destroys the measurement (`hoffman2023fusions` §2).

The paper is careful to quote physicists making exactly this claim in their own words, not Hoffman's paraphrase of them: David Gross, "space for sure, and probably time as well, will be emergent"; Ed Witten (quoted by Gross), "Space and time may be doomed"; Nathan Seiberg, "I am almost certain that space and time are illusions"; Andrew Strominger, "The notion of spacetime is clearly something we're going to have to give up"; Nima Arkani-Hamed, "the very notion of spacetime is not a fundamental one. Spacetime is doomed" (all quoted in `hoffman2023fusions` §2). This is presented as a genuine, mainstream (if not universal) position within high-energy theoretical physics, independent of anything to do with perception or consciousness — which is precisely why Hoffman treats the convergence of the evolutionary and physical arguments as significant: two independent lines of inquiry both conclude that space-time and its contents are not where the foundations of the theory should be laid.

### 1.6 Putting it together

If (a) fitness payoffs are generically not homomorphisms of the structures our perceptions seem to present (§1.4), and (b) space-time itself has no operational meaning below the Planck scale and several physics research programs are actively trying to derive it from something deeper (§1.5), then two independent roads converge on the same fork: whatever is fundamental, it is *not* space-time-and-the-objects-in-it. The interface theory of perception says our perceptions are a species-specific *user interface* to whatever that fundamental reality is — useful precisely because they hide, rather than reveal, its structure (`hoffman2014objects` §3; `hoffman2023fusions` §3). What remains is to say, formally, what lies *behind* the interface. That is the job of the conscious agent.

---

## 2. The conscious agent: full formal definition

### 2.1 Three intuitions, made precise

`hoffman2014objects` §4 motivates the definition with three intuitions, which are worth keeping distinct from the definition itself (the intuitions are "just intuitions... What does the heavy lifting is the definition itself" — the paper's own words):

1. Consciousness involves three interacting processes: **perception** (interacting with the world and having conscious experiences as a result), **decision** (choosing actions based on experiences), and **action** (interacting with the world in light of a decision, changing the world's state).
2. The theory should not build in unnecessary structure. Visual space *happens* to be approximately Euclidean, but nothing forces every possible conscious experience to live in a Euclidean space; nothing forces every decision process to maximize expected utility or minimize expected risk.
3. It *does* seem necessary to talk about probabilities — of having a particular experience, of making a particular decision, of a particular change occurring in the world.

The math built to satisfy point 3 while respecting point 2 is the **Markovian kernel**.

### 2.2 Markovian kernels, and why they are also "information channels"

A **measurable space** $(X, \mathcal{X})$ is a set $X$ with a $\sigma$-algebra $\mathcal{X}$ of "events" — subsets closed under complement and countable union (`hoffman2014objects` §4; `hoffman2023fusions` §4 gives the same definition with a coin-flip example: $X = \{H,T\}$, $\mathcal{X} = \{\{H\},\{T\},X,\emptyset\}$, versus the trivial algebra $\{X,\emptyset\}$ — the point being that a single set of outcomes can carry *different* amounts of representable structure depending which $\sigma$-algebra you equip it with, which is exactly the freedom the theory needs to let two agents attribute different "resolutions" to the same underlying space).

A **Markovian kernel** $K: B \times \mathcal{C} \to [0,1]$ from $(B,\mathcal{B})$ to $(C,\mathcal{C})$ satisfies (`fields2018conscious` Def. 1, matching `hoffman2014objects` §4 informally):

(i) for each measurable $E \in \mathcal{C}$, the map $b \mapsto K(b,E)$ is measurable;
(ii) for each $b \in B$, the map $F \mapsto K(b,F)$ is a probability measure on $C$.

In the finite case, a kernel is exactly a matrix whose rows are probability distributions — the object called $L$ throughout Part I/III of the parent tutorial. `hoffman2014objects` §4 draws out a second reading of the same object, borrowed from Cover & Thomas's *Elements of Information Theory*: "a discrete channel [is] a system consisting of an input alphabet $X$ and output alphabet $Y$ and a probability transition matrix $p(x|y)$... Thus a discrete channel is simply a Markovian kernel." This channel reading is not decoration — it lets the theory talk about each of $P$, $D$, $A$ as having a **channel capacity**, the maximum rate (bits per use) at which information can be sent with arbitrarily low error, borrowing the entire apparatus of Shannon information theory for free.

### 2.3 Definition 1: the six-tuple

> **Definition** (`hoffman2014objects`, Definition 1; identical statement in `hoffman2015origin` Definition 1). A **conscious agent** $C$ is a six-tuple
> $$
> C = \big((X,\mathcal{X}),\ (G,\mathcal{G}),\ P,\ D,\ A,\ N\big)
> $$
> where $(X,\mathcal{X})$ and $(G,\mathcal{G})$ are measurable spaces; $P: W \times \mathcal{X} \to [0,1]$, $D: X \times \mathcal{G} \to [0,1]$, $A: G \times \mathcal{W} \to [0,1]$ are Markovian kernels; and $N$ is an integer.

Reading each symbol against the three intuitions of §2.1:
- $X$: the **experience space** — the set of qualia the agent can have.
- $G$: the **action space** — the set of actions the agent can take.
- $W$: **the world** — required to even *state* $P$ (world $\to$ experience) and $A$ (action $\to$ world), but its ontological status is left open by the bare definition; §2.6 below is where the theory commits.
- $P$ (perception kernel): given the world's state, a distribution over the agent's next experience.
- $D$ (decision kernel): given an experience, a distribution over the agent's next action. Crucially, `hoffman2014objects`'s reply to Objection 4 states the interpretive choice explicitly: "we interpret the probabilities [of $D$] as objective probabilities, i.e., as representing a true nondeterminism in nature... We are inclined to interpret all the other [kernels'] probabilities as subjective, i.e., as reflections of ignorance and degrees of belief." $D$ alone is where free will lives in this formalism.
- $A$ (action kernel): given an action, a distribution over how the world's state changes.
- $N$: an integer counter, incremented once per full perceive→decide→act cycle. (`fields2018conscious` treats $N$, renamed $t$, as ticking specifically "concurrently with the action of $D$, i.e. immediately following each change in the state of $X$" — a small but important precision: the clock is tied to the decision step, not perception or action.)

### 2.4 The Church–Turing analogy, taken seriously

`hoffman2014objects` §4 states the analogy explicitly, and it is worth laying the two formalisms side by side because the parallel is structural, not decorative:

| Turing's formalism for computation | Hoffman & Prakash's formalism for consciousness |
|---|---|
| (1) finite set of states | $(X,\mathcal X)$: experience space |
| (2) finite set of symbols | $(G,\mathcal G)$: action space |
| (3) special blank symbol | *(no direct analogue — the CA formalism has no privileged "empty" experience)* |
| (4) finite set of input symbols | *(subsumed into $W$)* |
| (5) start state | *(no privileged start; $N$ counts cycles from wherever the agent begins)* |
| (6) halt states | *(none — a conscious agent need not terminate)* |
| (7) finite set of transition rules | $P, D, A$: three Markovian kernels |

The mapping is not one-to-one component-by-component, but the *rhetorical move* is identical: Turing proposed a spare, mechanically checkable formalism, then a *thesis* (unprovable, but falsifiable in principle) claiming the formalism's universal scope for computation. Hoffman and Prakash propose the **conscious-agent thesis**: "every property of consciousness can be represented by some property of a dynamical system of conscious agents" (`hoffman2014objects` §6, restated as Hypothesis 2). Like Church–Turing, it cannot be proven, but a single counterexample — a real conscious phenomenon demonstrably outside anything any conscious-agent network can represent — would refute it. `fields2018conscious` §2.1 sharpens the falsification condition further: "the demonstration of a conscious process... not representable by the action of a Markov kernel would falsify the conscious agent thesis."

### 2.5 The seven-tuple refinement, and the extrinsic/intrinsic distinction

`fields2018conscious` §2.1 makes one deliberate change to the 2014 definition: it folds $(W,\mathcal{W})$ explicitly into the tuple, making a conscious agent a **7-tuple** $[(X,\mathcal X),(G,\mathcal G),(W,\mathcal W),P,D,A,t]$ (Definition 2), rather than treating $W$ as an ambient background fixed before the definition is stated. The paper also generalizes the kernels to be **target-set dependent**: $P,D,A$ may depend on the *specific* element of their target space, not merely act "forgetfully" (a forgetful kernel, in their terminology, is one like $D: X(t) \to G(t+1)$ that ignores the pre-existing state of $G$; a target-dependent kernel like the controlled-NOT below cannot be written this way). This is a genuine increase in representational power over the original 2014 kernels, not mere restatement.

This paper's more consequential contribution, however, is separating two perspectives that the 2014 paper uses implicitly but never names:

- The **extrinsic perspective**: that of a theorist who can specify $P$, $D$, $A$ from the outside and ask how the perceive-decide-act cycle would unfold if they had specific formal properties. This is, as `fields2018conscious` §2.2 puts it, "of necessity an 'as if' conceit... not the perspective of any observer."
- The **intrinsic perspective**: that of the agent itself, formalized via the **reduced conscious agent (RCA)**, the 4-tuple $[(X,\mathcal X),(G,\mathcal G),D,t]$ — everything *except* the world-facing kernels $P$ and $A$. An RCA, paired with a choice of extrinsic $W$, $P$, $A$, reconstitutes a full CA. Crucially, an RCA "does not have access to the definitions of its own $P$, $D$, or $A$ kernels; hence an RCA has no way to determine whether any of them are homomorphisms" (`fields2018conscious` §2.2) — this is the formal teeth behind the interface-theory claim that an agent cannot, from the inside, verify that its perceptions are veridical.

This distinction resolves a possible confusion in the bare six-tuple definition: when the tutorial (and `hoffman2014objects` itself) says "consciousness involves probability," it means *from the extrinsic perspective of the theorist stipulating the model* — the probabilities in $D$ are the agent's own indeterminism, but the probabilities in $P$ and $A$, from the *agent's own vantage point*, are simply "what happens," felt with whatever subjective certainty or surprise the agent's experience carries; there is no experienced die-roll.

### 2.6 Conscious realism, and why it forces self-consistency

The bare definition leaves $W$ unconstrained — it could be "the physical world of physics," making the theory dualistic (some tuple components are consciousness, $W$ is matter). Hoffman and Prakash explicitly reject this:

> **Hypothesis 1 (Conscious Realism).** The world $W$ consists entirely of conscious agents. (`hoffman2014objects` §5)

This has an immediate mathematical consequence, worked out for the two-agent case. If $W$ is required to be composed of conscious agents, and $C_1$'s world *is* $C_2$ (and vice versa), then the informal picture "$C_1$ perceives $W$" and the more specific picture "$C_1$ perceives $C_2$" must be interchangeable descriptions of the same mathematics. This is exactly the content of the compatibility conditions for two **joined** agents:
$$
P_1 = A_2, \qquad P_2 = A_1, \qquad N_1 = N_2. \tag{hoffman2014objects, Eqs. 5–7}
$$
In words: agent 1's perception channel *is* agent 2's action channel (they are literally the same Markovian kernel, viewed from two ends), and vice versa; and the two agents' clocks are synchronized.

`fields2018conscious` §2.2–2.3 shows this compatibility requirement is not optional bookkeeping but forced by the intrinsic/extrinsic distinction of §2.5: since no RCA can determine, from the inside, that its associated $W$ has non-Markovian internal dynamics (it only ever sees the outputs of $P$), *no theoretical stipulation from the extrinsic perspective is allowed to give $W$ non-Markovian dynamics either* — otherwise the theorist's model would be attributing to $W$ a distinguishing feature (non-Markovianness) that is, by the theory's own admission, undetectable and hence illegitimate to assume. The practical upshot: **every occurrence of the symbol $W$ can be replaced by a second RCA**, and conscious realism becomes, formally, the statement that the entire network of interacting conscious agents can always be re-partitioned so that any one agent's "world" is just the rest of the network.

**The Markov-blanket connection.** `fields2018conscious` §2.3 draws out an unexpected bonus of this structure: Judea Pearl's notion that any set of states separating two other sets in a Bayesian network is a "Markov blanket" (formalized for biology/cognition by Karl Friston) applies directly to the simplest CA dyad. If $W = X \sqcup G$ (a single agent's own experience and action spaces, disjoint-unioned, playing the role of "the world" for itself), the disjoint union $Y \sqcup G$ in the related Computational-Evolutionary-Perception framework (Hoffman & Singh 2012) separates $W$ from $X$ exactly as a Markov blanket must. The composed kernel governing what crosses the blanket, $PD'AD$, is guaranteed Markovian by kernel composition alone — meaning the CA framework's core dynamical object, the **effective propagator**
$$
T_{\text{eff}}: \mathcal{M}_X(t) \to \mathcal{M}_X(t+1),
$$
(where $\mathcal{M}_X(t)$ is the set of probability measures on $X$ at internal time $t$) automatically satisfies a Chapman–Kolmogorov master equation $\mu_{t+1} = T_{\text{eff}}\,\mu_t$ (`fields2018conscious` §2.4). This connects the conscious-agent formalism, independently derived from Turing-style minimalism, to Friston's free-energy principle: a CA is, on this reading, "a free-energy minimizer" in Friston's sense (`fields2018conscious` §2.3), not by design but as a consequence of the Markov-kernel structure already in place.

---

## 3. Worked examples: building intuition from the smallest possible cases

### 3.1 The one-bit dyad: all seven punctual operators

`fields2018conscious` §3.1 analyzes the absolute minimal case: $X$ and $G$ each carry one bit, so states $\in \{|0\rangle,|1\rangle\}$, and the simplest kernels $D: X\times G \to G$ and $A: G \times X \to X$ are **punctual** (non-dispersive — every probability mass concentrated on a single outcome, so the "kernel" is really a deterministic function representable as a $0/1$ matrix). There are exactly **four** punctual operators leaving $X$ unchanged while updating $G$ (or vice versa):
$$
I = \begin{pmatrix}1&0\\0&1\end{pmatrix}, \qquad
\mathrm{NOT} = \begin{pmatrix}0&1\\1&0\end{pmatrix},
$$
$$
\mathrm{cNOT}_0 = \begin{pmatrix}\text{flip }G\text{ iff }X{=}0\end{pmatrix}, \qquad
\mathrm{cNOT}_1 = \begin{pmatrix}\text{flip }G\text{ iff }X{=}1\end{pmatrix}.
$$
(These are the same $I$ and NOT already familiar from Part I of the parent tutorial's toolkit as the trivial and swap $2\times 2$ stochastic matrices; the two controlled-NOTs are new here, and they are the operators that make $D$ or $A$ *state-dependent* rather than forgetful, per §2.5.)

If both $D$ and $A$ are $I$: nothing ever changes — the trivial CA. If both are NOT: this is "the familiar bistable multivibrator or 'flip-flop' circuit" (`fields2018conscious` §3.1). But the richer object is what the paper (following `massaro1989observer`'s original terminology) calls a **participator**: fix $X,G$ at one bit each and let *all* $4\times 4 = 16$ combinations of $D,A$ from the seven-operator family (adding the AND/OR-derived operators below) act. The dynamics generated by the compositions $DA$ and $AD$ across these operators forms the **symmetric group $S_4$** on 4 objects — a genuine, checkable piece of finite group theory, and the resulting CA dynamics exhibits limit cycles of length 1 ($I$), 2, 3, and 4, depending on which pair of operators is chosen (`fields2018conscious` §3.1). 🟢 **SOLID** — this is ordinary finite-group/Markov-chain enumeration, exactly analogous to the swap-matrix eigenvalue computation in the parent tutorial's §4, just carried one level further (four states of operator-choice space instead of two states of experience space).

**A subtlety worth flagging.** The paper is explicit that *none of this operator-level complexity is experienced by the 1-bit dyad itself*: "there is no sense in which the 1-bit dyad experiences the potential complexity of its dynamics... Any 1-bit dyad has only two possible experiences, those tokened by $|0\rangle$ and $|1\rangle$" (`fields2018conscious` §3.1). The richness lives in the *extrinsic* description of how the dynamics unfolds over time — cycle length, group structure — not in the *intrinsic* content of any single experience. Building an agent that can experience its own history (and hence "notice" a cycle) requires adding memory, which requires combining agents (§6.3 below).

**Universality, cheaply bought.** The standard Boolean AND/OR operators are *not* directly representable as Markovian kernels on one bit each, because they are logically irreversible (their matrices have all-zero rows — e.g. mapping both $(0,0)$ and $(0,1)$ to output $0$ destroys information about which input occurred, and a Markovian kernel's rows must be probability distributions summing to 1, which a zero row cannot be). `fields2018conscious` §3.1 shows the fix costs exactly one bit: add a single ancillary "$z$" bit fixed at 0, and use the reversible **Toffoli gate** $[x,y,z]\mapsto[x,y,(x\text{ AND }y)\,\mathrm{XOR}\,z]$, which *is* representable as a punctual Markovian kernel, and which is independently known to be computationally universal. So a 1-bit-dyad-plus-one-ancilla-bit is already enough, in principle, to build any Boolean circuit — a concrete, checkable instance of the claim (present already in `hoffman2014objects` §5.2, footnote to Cook 2004 and Ceccherini-Silberstein & Coornaert 2010) that networks of conscious agents are Turing-equivalent.

### 3.2 Two joined agents: the sixteen-state example, in full

This is the source of the tutorial's §12 worked example, and `hoffman2014objects` §6 gives the complete derivation. Take two agents
$$
C_1 = (X_1,G_1,P_1,D_1,A_1,N_1), \qquad C_2 = (X_2,G_2,P_2,D_2,A_2,N_2),
$$
each with $X_i, G_i = \{0,1\}$ (one bit of experience, one bit of action), joined as in §2.6 ($P_1=A_2$, $P_2=A_1$, $N_1=N_2$). The joint state space is $E = X_1 \times G_1 \times X_2 \times G_2$, sixteen states written $|x_1g_1x_2g_2\rangle$. At each tick, all four things happen *simultaneously*: $C_1$ perceives $x_1(t)$ and (via $D_1$) decides an action $g_1(t{+}1)$; $C_1$ then (via $A_1$) takes that action; $C_2$ does the same with $D_2,A_2$. The full transition kernel is *not* kernel composition — it is a product of the four kernels' values evaluated at the appropriate arguments:
$$
L(e,B) = \int_B A_2(g_2(t),dx_1(t{+}1))\,D_1(x_1(t),dg_1(t{+}1))\,A_1(g_1(t),dx_2(t{+}1))\,D_2(x_2(t),dg_2(t{+}1)). \tag{hoffman2014objects, Eq. 17}
$$

**First example.** Let $A_2, D_1, A_1, D_2$ all be the identity matrix. Direct computation of the 16-state chain's recurrent structure (`hoffman2014objects` §6.1) gives exactly six absorbing sets:

| Absorbing set $\rho$ | States | Period $d_\rho$ |
|---|---|---|
| 1 | $\{|0000\rangle\}$ | 1 |
| 2 | $\{|1111\rangle\}$ | 1 |
| 3 | $\{|0101\rangle, |1010\rangle\}$ | 2 |
| 4 | $\{|0001\rangle,|1000\rangle,|0100\rangle,|0010\rangle\}$ | 4 |
| 5 | $\{|0011\rangle,|1001\rangle,|1100\rangle,|0110\rangle\}$ | 4 |
| 6 | $\{|0111\rangle,|1011\rangle,|1101\rangle,|1110\rangle\}$ | 4 |

**Second example.** Change *only* $D_1$ from the identity to the swap $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, leaving $A_2,A_1,D_2$ unchanged. The entire asymptotic structure reorganizes into just two absorbing sets, each of period 8:
$$
\{|0000\rangle,|0100\rangle,|0110\rangle,|0111\rangle,|1111\rangle,|1011\rangle,|1001\rangle,|1000\rangle\}, \qquad
\{|0001\rangle,|1100\rangle,|0010\rangle,|0101\rangle,|1110\rangle,|0011\rangle,|1101\rangle,|1010\rangle\},
$$
each cycling through its eight states in the listed order. `hoffman2014objects` §6.2 notes the same reorganization occurs if instead $D_2$, $A_1$, or $A_2$ alone is flipped — "an asymptotic behaviour corresponds to an equivalence class of interacting conscious agents," i.e., many different single-kernel changes land you in the same qualitative long-run regime. 🟢 **SOLID** — verified finite-Markov-chain theory (the paper cites Revuz 1984 throughout for the general machinery), the substantive content being the *interpretation* of the state space as joint agent dynamics.

### 3.3 Combining more than two: tensor products and directed joins

For three agents $C_1,C_2,C_3$ with a **complete graph** of undirected joins (every pair adjacent), `hoffman2014objects` §5.2 shows $C_1$'s perception kernel must be a **tensor product** reflecting both inputs:
$$
P_1 = P_{12}\otimes P_{13}: (G_2\times G_3)\times X_1 \to [0,1], \qquad X_1 = \sigma(X_{12}\times X_{13}), \tag{Eqs. 9-10}
$$
$$
P_1\big((g_2,g_3),(x_{12},x_{13})\big) = P_{12}(g_2,x_{12})\,P_{13}(g_3,x_{13}). \tag{Eq. 11}
$$
The tensor-product structure encodes exactly the assumption that what $C_1$ perceives from $C_2$ is *probabilistically independent*, at the level of the raw kernel, of what it perceives from $C_3$ — a genuinely substantive modeling choice, not a mathematical inevitability, and one whose consequences unravel over time (§5 below shows how this independence erodes asymptotically even for the two-agent case). $C_1$'s action kernel is built the same way, $A_1 = A_{12}\otimes A_{13}$ (Eq. 12), with its own product space $G_1 = G_{12}\times G_{13}$ (Eq. 13). Any finite number of agents can be joined into any multi-graph (directed or undirected edges, any finite node degree) — including, as a special case, deterministic or nondeterministic cellular automata and universal Turing machines (`hoffman2014objects` §5.2, citing Ceccherini-Silberstein & Coornaert 2010 and Cook 2004).

`fields2018conscious` §3.2 generalizes this to **RCA networks** of arbitrary size and shape. The key formal move: consistency between the intrinsic and extrinsic perspectives (§2.5–2.6) *requires* that, for any RCA embedded in an arbitrarily large network, the rest of the network — however many nodes, however connected — can always be regarded as "the world" for that one RCA. This lets you draw non-overlapping boundaries anywhere in a network of interacting RCAs and treat everything inside each boundary as a single combined CA, with the fully-combined single $X\times G$ dyad as the limiting case where every RCA has been folded together. The paper explicitly connects this to classical **cybernetics**: from any one RCA's intrinsic perspective, its "world" — being underdetermined in principle by any finite sequence of observations — is a **black box** in Ashby's (1956) sense, and even a "good regulator" (Conant & Ashby 1970) can only regulate it within the bounds for which it was designed, with no guarantee, even in principle, that the box will stay within those bounds. This is a genuinely independent-source formal argument (from 1950s–70s cybernetics, not from the CA literature itself) landing on the same epistemic humility the interface theory of perception argues for on evolutionary grounds.

---

## 4. The qualia kernel

Compose the three per-agent kernels into a single operator acting on experience space alone:
$$
Q := DAP : X \times \mathcal{X} \to [0,1].
$$
$Q$ answers exactly one question: given the agent's current experience, what is the probability distribution over its *next* experience, after one full perceive-decide-act loop? This composite object is, mathematically, nothing more than another stochastic matrix (in the finite case) — an ordinary $L$-type kernel in the sense of the parent tutorial's Part I toolkit. Its significance is that it is the **only** object whose long-run/asymptotic behavior is examined in Part III's bridge to physics: everything about the *internal* three-kernel structure of an agent collapses, for the purposes of that derivation, into the single composite $Q$. This is not a simplification imposed for pedagogical convenience — it is exactly the object `hoffman2014objects` §8 uses when it writes "the harmonic functions of the space-time chain that is associated with the dynamics of a system of conscious agents are identical to the wave function of a free particle" (see Chapter III).

---

## 5. The combination problem

### 5.1 The problem, stated by its sharpest critics

William James posed the problem in 1890, and his formulation is still the one every subsequent author (including Hoffman & Prakash) quotes in full, because it is hard to state more precisely than James did:

> "Take a hundred of [feelings], shuffle them and pack them as close together as you can... still each remains the same feeling it always was, shut in its own skin, windowless, ignorant of what the other feelings are and mean. There would be a hundred-and-first feeling there, if... a consciousness belonging to the group as such should emerge. And this 101st feeling would be a totally new fact; the 100 original feelings might, by a curious physical law, be a signal for its creation, when they came together; but they would have no substantial identity with it, nor it with them... The private minds do not agglomerate into a higher compound mind." (James 1890, quoted in `hoffman2014objects` §7)

William Seager's gloss: "the problem of explaining how the myriad elements of 'atomic consciousness' can be combined into a new, complex and rich consciousness such as that we possess" (`hoffman2014objects` §7). `hoffman2014objects` distinguishes **two** combination problems, often conflated: (a) combining phenomenal *experiences* (qualia) — e.g., how do the tastes of salt, garlic, onion, tomato combine into the single taste of a sauce? — and (b) combining *subjects* — how do two distinct points of view fuse into a genuinely new, single point of view?

Sam Coleman is quoted as cautiously optimistic about (a) — "there will have to be some sort of qualitative blending or pooling among the qualities carried by each ultimate" — but flatly pessimistic about (b): "it is impossible to explain the generation of a macro-subject... in terms of the assembly of micro-subjects, for... subjects cannot combine" (Coleman 2013, quoted in `hoffman2014objects` §7). Thomas Nagel, similarly: "Presumably the components out of which a point of view is constructed would not themselves have to have points of view" (Nagel 1979, quoted in the same section) — i.e., composite subjects, on the standard view, must be built from *non-subject* parts, which is precisely what panpsychism denies is available. Coleman states the sharpest version of the objection: subjects are each "essentially a oneness," so "a set of subjects are essentially diverse, for they must be a set of onenesses. Essential unity from essential diversity... is thus a case of emergence" that Coleman regards as "demonstrably incoherent" (`hoffman2014objects` §7).

### 5.2 Theorem 1: the Undirected Join Theorem, in full

> **Theorem 1** (`hoffman2014objects` §7). Given $C_1=((X_1,\mathcal X_1),(G_1,\mathcal G_1),P_1,D_1,A_1,N_1)$ and $C_2$ analogously, with an undirected join, define
> $$
> C = ((X,\mathcal X),(G,\mathcal G),P,D,A,N)
> $$
> where $X=X_1\times X_2$, $G=G_1\times G_2$, $N=N_1=N_2$, and
> $$
> P = P_1\otimes P_2, \quad D = D_1\otimes D_2, \quad A = A_1\otimes A_2,
> $$
> explicitly, for $g_1\in G_1,g_2\in G_2,x_1\in X_1,x_2\in X_2$:
> $$
> P\big((g_2,g_1),(x_1,x_2)\big) = P_1(g_2,x_1)\,P_2(g_1,x_2), \tag{Eq. 27}
> $$
> $$
> D\big((x_1,x_2),(g_1,g_2)\big) = D_1(x_1,g_1)\,D_2(x_2,g_2), \tag{Eq. 28}
> $$
> $$
> A\big((g_1,g_2),(x_2,x_1)\big) = A_1(g_1,x_2)\,A_2(g_2,x_1). \tag{Eq. 29}
> $$
> Then $C$ satisfies the definition of a conscious agent.

**Proof.** By construction — you check each of the three conditions of Definition 1 directly against the tensor-product objects just given; $(X,\mathcal X)$ and $(G,\mathcal G)$ are measurable spaces by the standard product-$\sigma$-algebra construction, and $P,D,A$ are Markovian kernels because a tensor product of Markovian kernels is again Markovian (each row of the product still sums to 1, since $(\sum_x P_1(g_2,x_1))(\sum_x P_2(g_1,x_2)) = 1\cdot 1$). $\blacksquare$

This is what the tutorial's §13 calls "🟢 SOLID as math" — the proof is a few lines of bookkeeping, not a deep theorem, and its force is entirely in what it *licenses you to say philosophically*: the combined agent $C$ is a bona fide conscious agent by the same definition its constituents satisfy, so joining is not a metaphorical or approximate operation — it produces an object of exactly the same formal kind you started with.

### 5.3 Theorem 2: the Directed Join Theorem

> **Theorem 2** (`hoffman2014objects` §7). Given a directed join $C_1 \to C_2$, define
> $$
> C = (X_1,\ G_2,\ P_1,\ D_1 A_1 D_2,\ A_2,\ N_1)
> $$
> where $D_1A_1D_2$ denotes **kernel composition** (ordinary matrix multiplication of the three kernels, in the finite case). Then $C$ satisfies the definition of a conscious agent.

**Proof.** By construction, exactly as in Theorem 1: $D_1 A_1 D_2$, as a composition of three Markovian kernels, is Markovian (kernel composition preserves the Markov property — this is the same fact used in §2.6 to guarantee $T_{\text{eff}}$ is Markovian). $\blacksquare$

The directed combination's decision kernel $D_1A_1D_2$ literally *integrates* — in the sense of ordinary integral calculus — over the entirety of $C_1$'s intermediate action space $G_1$ and $C_2$'s intermediate experience space $X_2$. `hoffman2014objects` §7 draws out the interpretive payoff: this "comports well with evidence that there is something it is like to make a decision [67,68], and suggests the intriguing possibility that the phenomenology of decision making is intimately connected with the spaces of perceptual experiences that are integrated in the decision process" — i.e., the *combined* agent's experience of deciding is not merely "informed by" $C_2$'s downstream processing, it is mathematically constituted by integrating over it.

### 5.4 What the theorems buy, and what they don't

For the **experience-combination** problem: the undirected combination has possible experiences $X = X_1\times X_2$ — genuinely new possible experiences not available to either constituent alone (`hoffman2014objects`'s example: if $C_1$ can see only achromatic brightness and $C_2$ only hue, $C$ can see hued brightness). Crucially, "although $C$'s possible experiences $X$ are the Cartesian product of $X_1$ and $X_2$, nevertheless $C$ might exhibit perceptual dependence between $X_1$ and $X_2$, due to feedback inherent in an undirected join" — the Cartesian product is the *state space*, not a claim that the two components stay independent forever.

For the **subject-combination** problem, the paper's argument leans on Coleman's own characterization of a subject as "a point of view annexed to a private qualitative field" — and notes that a conscious agent $C_i$ *is* a subject in exactly this sense: it has "a distinct sphere, $X_i$, of 'conscious-experiential goings-on'" with "no direct experiential access to the sphere, $X_j$" of any other agent (`hoffman2014objects` §7). Since Theorems 1 and 2 are *constructive* proofs that new six-tuples (hence new subjects, by the theory's own identification of subject with six-tuple) arise from old ones, Hoffman and Prakash claim this is "the first rigorous theoretical account of the combination of subjects." The original agents are not destroyed — their structure is "still visible in the tensor/composition structure" — yet the combined agent possesses genuinely new properties, quantifiable via **Tononi's integrated information measure $\Phi$**: in the §3.2 numeric example above, flipping $D_1$ to reorganize the 16-state chain from six absorbing sets down to two period-8 cycles is computed to correspond to **$\Phi = 2$ bits** of integrated information — information present in the combined agent that is not reducible to either constituent alone (`hoffman2014objects`, reply to Objection 18). The authors are careful to disclaim endorsing Tononi's larger theory of consciousness (which identifies consciousness *with* integrated information, a claim `hoffman2014objects` calls "provably false" by appeal to a cited theorem against all reductive-functionalist theories of consciousness) — they use $\Phi$ purely as a quantitative *measure*, not as a metaphysical commitment.

Whether this genuinely *dissolves* James's problem or merely *reformulates* it in more rigorous language is exactly the live dispute canvassed in §5.5 below — the mathematics is not itself the philosophical resolution; it is the substrate the philosophical argument now has to engage with on the theory's own terms.

### 5.5 Objections and replies, in the authors' own words

`hoffman2014objects` §9 publishes 21 objections from readers alongside replies — an unusually candid feature for a paper of this kind. A representative, weighted selection (paraphrased minimally, since the original phrasing carries the argumentative force):

**Objection (generality).** "Your definition of conscious agents could equally well apply to unconscious agents. Thus, your theory says nothing about consciousness." **Reply.** "Even if the definition could apply to unconscious agents, that would not preclude it from applying to consciousness, any more than using the integers to count apples would preclude using them to count oranges." A sharper follow-up objection (#21) presses exactly here: "the very fact that the integers can [be] used to count apples and oranges and peace treaties... is precisely WHY the integers are not a theory of either." The authors' counter: "The integers are not considered a theory of peace treaties because they don't have the appropriate mathematical structure to model peace treaties — not because they can be used to count apples and peace treaties," and they point to $SU(3)$ modeling both quark color (exactly) and flavor (approximately) as an existing, uncontroversial precedent for one formal structure serving two physical domains. This objection-and-reply pair is the strongest fault line in the whole paper: whether the CA formalism has "the appropriate structure" for consciousness specifically, as opposed to merely being *compatible* with a consciousness interpretation, is not something the mathematics itself can settle — it is exactly the interpretive label "conscious," attached from outside the theorems, that critics can reasonably keep pressing on.

**Objection (18, the sharpest technical challenge).** "[The model] relies on the Cartesian product of $X_1$ and $X_2$... The Cartesian product is not conducive to real combination... their resolution to this objection is mere handwaving: 'as the conscious agents in the combination continue to interact, the decisions become less and less independent.' This is mere wishful thinking." **Reply.** The claim is *not* wishful: "in the asymptotic limit of the dynamics" the decision kernel $D^n$ of the combination, as $n\to\infty$, "cannot, in general, be written as a product" — this is exactly the §3.2 worked example, where the asymptotic structure (six absorbing sets, or two period-8 cycles) is *not* simply the product of $C_1$'s and $C_2$'s individual asymptotic structures, and the degree of non-reducibility is precisely what $\Phi=2$ bits quantifies. Whether "the decision kernel is no longer a product" is the same thing as "genuine phenomenal unity" (the thing James's puzzle was actually about) remains, in the authors' own framing, exactly the crux critics should keep pushing on — this is one of the very few places the paper concedes the *mathematical* claim (asymptotic non-factorizability, 🟢 checkable) and the *philosophical* claim (this constitutes real subject-unification, 🟡 interpretive) are separable, and only the first is settled.

**Objection (free will, #4).** "A conscious agent should have free will. Where is this modeled?" **Reply.** $D$'s probabilities are interpreted as *objective* indeterminism — "a true nondeterminism in nature" — while every other kernel's probabilities are interpreted as subjective (ignorance/degrees of belief). This is a substantive, falsifiable-in-spirit interpretive commitment baked into an otherwise uninterpreted piece of measure theory, and it is worth flagging precisely because nothing in the bare Markovian-kernel formalism *forces* this asymmetric reading — a different theorist could adopt the CA formalism and interpret all kernels subjectively, getting a fully deterministic (from the world's-eye view) theory of consciousness instead. The free-will claim is a choice layered on top of the mathematics, not a consequence of it.

**Objection (mathematics loses something essential, #2).** "How can consciousness be cast in a mathematical formalism without losing something essential?" **Reply.** "The mathematics does lose something essential, viz., consciousness itself. Similarly, mathematical models of weather also lose something essential, viz., weather itself... The math is not the territory. But, properly constructed, mathematics reveals the structure of the territory." This is worth keeping in view throughout the rest of this document: the theory does not claim its equations *are* subjective experience, only that they capture enough of its formal/relational structure to generate testable consequences.

---

## 6. RCA networks, memory, and cognition: a preview beyond combination

`fields2018conscious`'s stated purpose is to show the CA framework "provides a robust and intuitive representation of perceptual and cognitive processes." Three results worth knowing, even briefly, because they show the framework's reach beyond the combination problem proper:

**Memory, by combination.** §3.2/Fig. 7 constructs a composite CA with one-time-step short-term memory by combining a canonical CA with a *dyad* (the $X$-$G$ self-loop structure of §3.1), replacing the dyad's decision kernel with a "copy" kernel $D_C$ that copies $x_1(t)$ into $g_2(t{+}1)$, and setting the dyad's action kernel to the identity. The resulting composite has "qualitatively different behavior than either of the CAs that were combined to produce it" — memory is not a new primitive added to the theory, it is what a *particular pattern of combination* looks like.

**Fitness as network centrality.** The paper shows that a notion of "fitness" for a CA — how much its presence matters to the rest of a network — emerges naturally from the formalism and corresponds to existing measures of **centrality** in social-network theory, connecting the evolutionary-game material of §1 above to graph-theoretic properties of the combined-agent network itself, rather than treating fitness as an externally-imposed payoff function bolted onto the dynamics.

**Scale-free, rich-club architecture.** §3.2 notes that the same combinatorial patterns found across gene-regulation networks, protein-interaction networks, neurocognitive architecture, and academic-collaboration networks — preferential attachment, small-world structure, "rich-club" connectivity where well-connected nodes at one scale form a small-world network at the next scale up — are exactly the kind of structure a hierarchically-combined RCA network can exhibit "all the way down." This is offered as a structural hint (🟡, not a proof) that the same combination-and-fusion machinery driving Chapter IV's physics program might also be the right lens for cognitive architecture generally.

None of this is pursued to completion in the sources — `fields2018conscious` itself says "further analyses... including explicit consideration of the behavior of the $t$ counters, is currently underway and will be reported elsewhere." It is included here because it shows the combination theorems of §5 are not a philosophical dead end reached and then abandoned — they are the load-bearing construction the rest of the research program (cognition here; physics in Chapters III–IV) is quietly built on top of.

---

## 7. Where this leaves us

Summary of what is actually nailed down versus what remains programmatic, restricted to the claims examined in this chapter:

| Claim | Status | Source |
|---|---|---|
| Fitness payoffs generically fail to be homomorphisms of total orders, permutation groups, cyclic groups, measurable spaces | 🟢 four proven theorems, explicit counting formulas | `prakash2020fact` |
| A specific evolutionary game exists where a non-veridical (interface) strategy provably beats a veridical (naive-realist) strategy | 🟢 closed-form solution | `mark2010natural` |
| Space-time has no operational meaning below the Planck scale | 🟢 accepted physics argument, not original to this research program | `hoffman2023fusions` §2, citing Gross, Witten, Arkani-Hamed et al. |
| A conscious agent is a well-defined mathematical object (6-tuple/7-tuple of measurable spaces + Markovian kernels + counter) | 🟢 a definition, consistently used across all subsequent papers | `hoffman2014objects`, `fields2018conscious` |
| Conscious realism (the world consists entirely of conscious agents) is mathematically coherent and forces the intrinsic/extrinsic consistency requirement | 🟢 as formal consistency; 🟡 as metaphysics | `hoffman2014objects` §5; `fields2018conscious` §2.2–2.3 |
| Undirected and directed joins of conscious agents are constructive, provable operations producing new conscious agents | 🟢 (Theorems 1 & 2) | `hoffman2014objects` §7 |
| The combined agent's asymptotic dynamics is not, in general, reducible to a product of its constituents' dynamics | 🟢 (checkable in the 16-state example; $\Phi=2$ bits) | `hoffman2014objects` §6.2, reply to Objection 18 |
| This constitutes a genuine solution (not just reformulation) of James's combination problem for *subjects* | 🟡 contested — the authors' own reply to Objection 18 concedes the philosophical crux is separate from the math | `hoffman2014objects` §7, §9 |
| The conscious-agent thesis (Church–Turing analogue for consciousness) | 🔴 an empirical/philosophical hypothesis, not yet falsified or confirmed | `hoffman2014objects` §6; `fields2018conscious` §2.1 |
| Networks of conscious agents are Turing-equivalent / computationally universal | 🟢 (constructive: Toffoli gate + 1 ancilla bit) | `fields2018conscious` §3.1 |

The object left standing at the end of this chapter is the **qualia kernel** $Q = DAP$ (§4) — an ordinary stochastic matrix, once you have it, whose *asymptotic* behavior is where Hoffman and Prakash next go looking for physics. That is the subject of Chapter III.

---

## References (bib keys used in this chapter)

`hoffman2014objects` · `fields2018conscious` · `hoffman2015origin` · `mark2010natural` · `prakash2020fact` · `hoffman2023fusions` (for the spacetime-is-doomed arguments, §1.5, developed fully in Chapter IV) · `massaro1989observer` (historical source of the term "participator," §3.1)

Full bibliographic data for each: [`../papers/references_report.md`](../papers/references_report.md). Full BibTeX: [`../papers/hoffman_conscious_agents.bib`](../papers/hoffman_conscious_agents.bib).
