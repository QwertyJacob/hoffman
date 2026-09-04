# Chapter IV — The Frontier: Toward the Forces

*An extended, paper-grounded companion to Part IV of [`conscious-agents-zero-to-hero.md`](conscious-agents-zero-to-hero.md), continuing directly from [Chapter III](chapter-iii-bridge-to-physics.md). Every claim is traced to a specific paper in [`papers/`](../papers/), cited by bib key. Primary sources: `hoffman2023fusions` (Hoffman, Prakash & Prentner, *Fusions of Consciousness*, *Entropy*, 2023) and `prentner2024interfacing` (Prentner & Hoffman, *Interfacing consciousness*, *Frontiers in Psychology*, 2024).*

Tags carried over from Chapters II–III:

> 🟢 **SOLID** — an actual theorem, checkable by direct computation.
> 🟡 **SKETCH** — a real mathematical construction, proposed/conjectural as physics.
> 🔴 **ASPIRATION** — a stated goal, not yet mathematics.

**A note on scope, stated up front.** This is the frontier of an active research program, and the corpus of papers available for this chapter reflects that: `hoffman2023fusions` (published, peer-reviewed) is the mathematical backbone; `prentner2024interfacing` (also published) extends the philosophical framing toward AI and simulation arguments. The parent tutorial's final section (§25, "Recursive trace logic") describes still-newer material — a partial order on Markov chains, a "multiscale logic of minimal surprise," and a conjectured route to relativity via nested trace-observers — drawn from a **2026 recorded conversation** among Hoffman, Prakash, Chris Fields, and Robert Chis-Ciure, hosted by Michael Levin's lab (the source the earlier tutorial cites, and the same link already saved in this project's [`content/other.md`](other.md)). That material is **not represented by any paper in this project's `papers/` directory** — there is no manuscript to read, extract from, or cite by bib key. Section 9 of this chapter treats it accordingly: the parts of it that reduce to classical, citable Markov-chain theory are reconstructed and grounded properly; the genuinely new claims are reported as claims, attributed to the recorded discussion rather than dressed up with a bibliography entry that would overstate how settled they are.

---

## 1. Why "spacetime is doomed" matters here, in full technical detail

Chapter II §1.5 introduced the two physics arguments against fundamental spacetime in outline. `hoffman2023fusions` §2 is where they are given in full, and it is worth reconstructing them completely here because Chapter IV's entire program — decorated permutations, the amplituhedron, agent-particle correspondence — is a direct response to a *specific* recent development in this literature (§7 below), not a generic appeal to "physicists are skeptical of spacetime."

### 1.1 The two arguments, spelled out

**Argument 1 — measurement resolution versus gravitational collapse.** To resolve smaller structures, you need shorter-wavelength probing radiation. Quantum theory ties a photon's energy inversely to its wavelength:
$$
E = \frac{hc}{\lambda}. \tag{1}
$$
Mass-energy equivalence, $E=mc^2$ (Eq. 2), means concentrating enough energy to achieve very short wavelengths concentrates mass-energy in a small region. General relativity says concentrated mass-energy curves spacetime. As $\lambda$ shrinks toward the Planck length ($\sim 1.6\times10^{-35}\,\text{m}$), the curvature this energy produces becomes strong enough to form an event horizon — "a black hole is born, and destroys the object we want to observe. If we persist, and use even higher energies, the black hole just becomes bigger" (`hoffman2023fusions` §2). Conclusion: no distance or duration below the Planck scale can be given operational meaning by any conceivable measurement, in principle, not merely in current practice.

**Argument 2 — the measuring device is itself a physical system.** Any device precise enough to measure something is subject to the same quantum uncertainty relations as what it measures:
$$
\Delta E\,\Delta t \geq \frac{h}{4\pi}, \qquad \Delta x\,\Delta p \geq \frac{h}{4\pi}. \tag{3, 4}
$$
Improving precision requires adding degrees of freedom to the device — more parts, more mass — and "eventually, the device collapses into a black hole and destroys the measurement" (`hoffman2023fusions` §2). This is a distinct argument from Argument 1 (it is about the *apparatus*, not the *probe*), but it reaches the identical conclusion by the identical mechanism: gravity always intervenes before infinite precision can be achieved.

### 1.2 The physicists' own words

`hoffman2023fusions` §2 quotes David Gross directly: "I believe that space for sure, and probably time as well, will be emergent." In the same source, Gross quotes Ed Witten: "Space and time may be doomed"; Nathan Seiberg: "I am almost certain that space and time are illusions"; Andrew Strominger: "The notion of spacetime is clearly something we're going to have to give up." Nima Arkani-Hamed, from his 2010 Cornell Messenger Lecture: "the very notion of spacetime is not a fundamental one. Spacetime is doomed. There is no such thing as spacetime fundamentally in the actual underlying description of the laws of physics." Arkani-Hamed is quoted going further still, tying quantum theory itself to the same fate: "quantum theory itself is not fundamental, and will arise with spacetime from some deeper structure... some way of thinking about interpreting this structure will let us see spacetime and quantum mechanics emerge simultaneously and joined at the hip" (`hoffman2023fusions` §2). These are load-bearing citations for the whole chapter: the claim that decorated permutations and the amplituhedron matter to fundamental physics is not something Hoffman, Prakash, and Prentner invented to serve their own theory — it is an active, mainstream research direction in high-energy theoretical physics that they are borrowing and re-purposing (§7 below).

### 1.3 The consequence for theories of consciousness

`hoffman2023fusions` §2 draws the meta-level conclusion this whole chapter is built on: "If spacetime is not fundamental, neither are its particles, which are irreducible representations of the Poincaré symmetries of spacetime. Nor are macroscopic objects, such as neurons and brains, made of particles. A theory of consciousness that starts with spacetime, particles, neurons, or brains has little chance." This targets not only physicalism but also versions of **panpsychism** that treat spacetime as the arena in which proto-conscious particles interact — if spacetime itself is not fundamental, that arena cannot be a foundation either.

---

## 2. The 2023 refinement: Leibniz, made explicit

`hoffman2023fusions` §4 restates the conscious-agent definition from Chapter II, but frames its minimal posits in a way the 2014 paper does not: explicitly as a modern formalization of Leibniz's monadology. The two starting posits are: (1) there are conscious experiences; (2) there are probabilistic relations among conscious experiences. The paper draws the parallel directly: "Our posits for the notion of a conscious agent mirror G.W. Leibniz's posits for his notion of a simple substance: 'there is nothing besides perceptions and their changes to be found in the simple substance... it is in these alone that all the internal activities of the simple substance can consist' [Leibniz]." Leibniz's "**appetitions**" — a monad's capacity to change its own internal state — are identified with the conscious agent's **decisions** ($D$); the addition of an explicit **action** kernel $A$ (letting an agent act *on* the world, not merely mirror it) is flagged as the authors' own departure from Leibniz, who held that a monad only ever *perceptually mirrors* the whole universe without acting on it (`hoffman2023fusions` §4).

This is worth dwelling on for a moment, because it clarifies something about the 2014→2023 trajectory of the research program that is easy to miss if you only read the equations: the mathematics of the six-tuple/seven-tuple has not fundamentally changed between `hoffman2014objects` and `hoffman2023fusions` — what has changed is the framing, becoming progressively more explicit that this is a *modern mathematical monadology*, with a stated debt to a 17th-century metaphysical system, not a piece of physics dressed up after the fact in philosophical language.

---

## 3. Combination, in the 2023 paper's cleaner coordinates

`hoffman2023fusions` §5 restates Chapter II's Undirected Join Theorem in a notation that turns out to be exactly what is needed for the geometric material in §4–6 below. Two agents
$$
C_1 = (X_1,G_1,W_1,P_1,D_1,A_1), \qquad C_2 = (X_2,G_2,W_2,P_2,D_2,A_2)
$$
combine as
$$
C_1\times C_2 = (X_1{\times}X_2,\ G_1{\times}G_2,\ W_1{\times}W_2,\ P_1{\otimes}P_2,\ D_1{\otimes}D_2,\ A_1{\otimes}A_2), \tag{Eqs. 15-16}
$$
which "satisfies the definition of being a single conscious agent" — the same Theorem 1 already proven in Chapter II §5.2, restated here to set up a specific numeric special case. Suppose $X_1=X_2=\{$red, green$\}$ (one bit each). Their combination's qualia kernel has a block-diagonal Q-matrix, $Q_1\otimes Q_2$, with zero cross-terms — the two agents, combined, are formally "non-interacting." The paper then relaxes this: let
$$
x = p(x_2\mid x_1), \qquad y = p(x_1\mid x_2), \tag{Eqs. 17-18}
$$
be the two cross-coupling probabilities, so that the combined qualia kernel simplifies (using the row-sum-to-1 constraint) to a **two-parameter family**
$$
Q(x,y) = \begin{pmatrix}1-x & x \\ y & 1-y\end{pmatrix}. \tag{Eq. 19}
$$
At $x=y=0$ this is the identity matrix — the non-interacting case above. This two-parameter family is the object the rest of the chapter studies geometrically: it is the entire space of possible ways two one-bit agents can combine, parameterized by exactly two real numbers.

---

## 4. The Markov polytope $\mathcal{M}_n$

### 4.1 Definition and dimension count

An $n\times n$ stochastic matrix has $n$ rows, each a point on the standard $(n{-}1)$-simplex (probabilities over $n$ outcomes, summing to 1). The set of *all* $n\times n$ stochastic matrices is therefore the Cartesian product of $n$ copies of that simplex — a compact, convex polytope of dimension $n(n{-}1)$ (`hoffman2023fusions`, Appendix A.1). Its **vertices** — the extreme points, not expressible as convex combinations of others — are exactly the stochastic matrices each of whose rows is a *unit* row (a single 1, the rest 0s), i.e., the **deterministic functions** $\{1,\dots,n\}\to\{1,\dots,n\}$. There are $n$ choices per row, $n$ rows, hence $n^n$ vertices. The paper names this object the **Markov polytope of degree $n$**, $\mathcal{M}_n$, and notes it is *simple* (every vertex connects, via boundary edges, to exactly $n(n{-}1)$ other vertices — one per dimension) and *integral* (all vertex coordinates are integers, 0 or 1).

### 4.2 $\mathcal{M}_2$: the unit square, worked completely

For $n=2$, the $(x,y)$ coordinates of §3 above coincide exactly with $\mathcal{M}_2$: it is the **unit square** $[0,1]^2$, of dimension $2 = n(n-1)$, with $n^n=4$ vertices — the identity matrix $(0,0)$, the swap/NOT matrix $(1,1)$, and the two "collapse to a single state" matrices $(1,0)$ and $(0,1)$ (`hoffman2023fusions` §5, Fig. 4). Every point in this square is a legitimate two-state Markov chain; the swap matrix familiar from Chapters II–III sits at exactly one corner of it.

**The kernel flow.** To describe two *consecutive* applications of $Q(x,y)$, compute $Q^2 = QQ$; the paper gives the result explicitly (Eq. 21) and defines a discrete "kernel derivative" from the off-diagonal terms of $Q^2-Q$:
$$
\frac{dQ}{d\tau} = \Big(\frac{dx}{d\tau},\frac{dy}{d\tau}\Big) = \big(x(1-x-y),\ y(1-x-y)\big). \tag{Eq. 22}
$$
This vector field (`hoffman2023fusions` Fig. 4) has a **single source** at the identity corner $(0,0)$; the NOT corner $(1,1)$ does not flow at all — it is a periodic kernel of period 2, a fixed point of the flow rather than a source or sink; and there is a **line of sinks**, $y = 1-x$, along which every point flows to. Along that line, the matrix
$$
Q(x,y)\Big|_{y=1-x} = \begin{pmatrix}1-x & x\\ 1-x & x\end{pmatrix}
$$
has **both rows identical** — the matrix has dropped from rank 2 to rank 1. This rank collapse is, the paper argues, exactly the signature of **fusion**: a genuinely new, simpler agent (one effective quale instead of two) emerging from repeated interaction between two originally-distinct agents. 🟢 **SOLID** — every step here is elementary linear algebra and calculus of a vector field on the unit square, directly checkable.

### 4.3 Invariant measures and the fusion simplex

A probability measure $\mu = (\alpha, 1-\alpha)$ over $\{$red, green$\}$ is **invariant** for kernel $Q$ if $\mu Q = \mu$. Solving $\big(\alpha \; 1-\alpha\big)\begin{pmatrix}1-x&x\\y&1-y\end{pmatrix} = \big(\alpha\;\;1-\alpha\big)$ gives the family of lines
$$
y = \frac{\alpha}{1-\alpha}\,x, \tag{Eq. 27}
$$
one line per value of $\alpha$, each passing through the origin and following the flow field of §4.2 (`hoffman2023fusions` Fig. 5). A **stationary kernel** is one satisfying $QQ=Q$ (idempotent) — exactly the line of sinks $y=1-x$ identified above, along which the kernel is fully determined by the single parameter $\alpha = x = 1-y$ (Eq. 29). This one-parameter family of fused kernels, geometrically a **unit 1-simplex**, is the **fusion simplex** $\mathcal{F}_2$ (`hoffman2023fusions` Fig. 7).

The pattern generalizes cleanly: for $n$ interacting agents, the possible **total fusions** (all $n$ collapsing into one effective quale) form a unit $(n{-}1)$-simplex $\mathcal{F}_n$ — a 2-simplex (triangle) for three agents with qualia red/green/blue (`hoffman2023fusions` Fig. 8), and so on. `hoffman2023fusions` §5 draws a striking metaphysical corollary from this: since any collection of agents is itself an agent (by the combination theorem), "there is ultimately one agent" — a position the paper explicitly likens to Erwin Schrödinger's essay *Mind and Matter*, and to Leibniz's "pre-established harmony" among monads. But the paper immediately tempers this with a genuinely careful technical point about **cardinality**: starting from a countable infinity $\aleph_0$ of agents, the number of possible *combinations* is $2^{\aleph_0}$, a strictly larger infinity $\aleph_1$ (by Cantor's theorem, cited explicitly), and the combinations of *those* combinations climb to $\aleph_2$, and so on through Cantor's entire hierarchy. "For this reason, a theory of consciousness cannot start with a theory of the 'Ultimate One Consciousness'" (`hoffman2023fusions` §5) — a rare instance in this literature of a metaphysically loaded claim (monism, "the One") being disciplined by a genuine, citable mathematical fact (Cantor's theorem on the cardinality of power sets) rather than left as free-floating speculation.

### 4.4 $\mathcal{M}_3$: a glimpse of how fast the richness grows

`hoffman2023fusions` Appendix A shows $\mathcal{M}_3$ is a 6-dimensional manifold embedded in $\mathbb{R}^{3\times3}\cong\mathbb{R}^9$ (the image, under an affine map, of the Cartesian product of three copies of the 2-dimensional standard simplex — one per row), with $3^3=27$ vertices. Appendix B catalogs **17 distinct decorated permutations** realized among those 27 vertices (§7.5 below explains what a decorated permutation is), and Figure 12 gives the polytope's adjacency graph. The paper's own framing of why this matters: "Our main goal here is to demonstrate how enormously richer, already, is the 3-agent theory than that for 2-agents" (Appendix A) — this is presented candidly as a first step in an open-ended geometric research program (general convex-polytope theory for arbitrary $n$ is flagged as future work), not a completed classification.

---

## 5. Decorated permutations: the bridge physics itself discovered

### 5.1 Historical motivation: from hundreds of pages to one term

`hoffman2023fusions` §6 recounts the actual discovery, in physics, that motivates the entire construction. Quantum field theory computes **scattering amplitudes** — probabilities for specific outcomes when particles collide — traditionally via Feynman diagrams built on the assumption that spacetime, locality, and unitarity are fundamental. Some of these calculations are staggeringly complex: "The formula for two gluons smashing to produce four gluons requires hundreds of pages of algebra." In 1986, Parke and Taylor discovered a formula for gluon scattering requiring only *one term* — a formula that "did not model scattering as a process in spacetime, but pointed to a realm beyond spacetime." Subsequent discoveries in this vein were unified in 2013 into the **amplituhedron** (Arkani-Hamed & Trnka), a geometric object beyond spacetime whose *volume*, for a given scattering process, directly gives the amplitude — with different physical processes corresponding to different faces of one infinite-dimensional "master amplituhedron" (`hoffman2023fusions` §6).

### 5.2 The positive Grassmannian and its combinatorial essence

The amplituhedron is obtained via a linear map from the **positive Grassmannian**. The real Grassmannian $G(k,n)$ is the space of $k$-dimensional subspaces of an $n$-dimensional vector space; any element can be represented by a full-rank $k\times n$ matrix $C$, and the determinants of all $k\times k$ minors of $C$ are its **Plücker coordinates**. The **positive Grassmannian** $G^{\geq 0}(k,n)$ is the subset where every Plücker coordinate is non-negative. The remarkable fact `hoffman2023fusions` §6 highlights: the *invariant physical content* of the positive Grassmannian — everything that actually matters for computing a scattering amplitude — reduces to a purely combinatorial object, the **decorated permutation**.

### 5.3 Definition, built up from an ordinary permutation

An ordinary permutation $s$ on $\bar n = \{1,\dots,n\}$ can be "decorated" into a map $\sigma: \bar n \to \overline{2n}=\{1,\dots,2n\}$ by the rule: if $s(a) > a$, set $\sigma(a)=s(a)$; if $s(a) < a$, set $\sigma(a) = s(a)+n$; if $s(a)=a$ (a fixed point), $\sigma(a)$ may be *either* $a$ or $a+n$ — a genuine binary choice at each fixed point. This motivates the formal definition:

> **Definition 1** (`hoffman2023fusions` §6). A **decorated permutation** is a mapping $\sigma: \bar n \to \overline{2n}$ such that, for every $a$, $a \le \sigma(a) \le a+n$, and $\sigma(a) \bmod n$ is an ordinary permutation.

A permutation with exactly $k$ fixed points has $2^k$ distinct decorations (one binary choice per fixed point); in particular, the identity permutation alone has $2^n$ decorations.

### 5.4 On-shell diagrams: how to read a decorated permutation off a picture

Decorated permutations correspond to diagrams — "plabic graphs" to mathematicians, "**on-shell diagrams**" to physicists (`hoffman2023fusions` §6, citing Arkani-Hamed et al.). The reading algorithm: arrange the numbers $1,\dots,n$ clockwise around a circle; to find $\sigma(a)$, follow the line inward from $a$; at a **white** dot, turn left; at a **black** dot, turn right; the number you exit at is $\sigma(a)$ — with $n$ added if you exit at a number smaller than where you started (since $\sigma(a)$ must satisfy $a\le\sigma(a)\le a+n$).

Worked example, reproduced in full from `hoffman2023fusions` §6 (their Fig. 9, for $\sigma=[3,4,5,6]$, $n=4$): starting from 1, hit a white dot (turn left), then a black dot (turn right), then a white dot (turn left), arriving at 3 — so $\sigma(1)=3$. Starting from 2: black (right), white (left), black (right), arriving at 4 — $\sigma(2)=4$. Starting from 3, the trace ends at 1 — but since $3 > 1$, the decoration rule adds $n=4$, giving $\sigma(3)=5$. Similarly $\sigma(4)=6$. This gives exactly the stated decorated permutation $[3,4,5,6]$. The paper also gives the inverse construction (§6, algorithm for building a *reduced* diagram — the minimal-complexity diagram for a given decorated permutation — by decomposing $\sigma$ into a minimal sequence of "adjacent transpositions"; e.g., $[3,5,4,6,7]$ decomposes as $(12)(23)(24)(12)(25)$, illustrated in their Fig. 10). This reduction algorithm is genuinely intricate procedural combinatorics; it is not reproduced step-by-step here, but the essential point for this chapter's purposes is that it is fully algorithmic and mechanical — nothing about it depends on physical interpretation, only on the combinatorics of the permutation.

### 5.5 The map from Markov chains to decorated permutations — the paper's central new contribution

Recall (Chapter III §2.1) that a Markov chain's states split into communicating classes; a state $a$ is **absorbing** if $Q(a,a)=1$; more generally $a$ is **recurrent** if the chain returns to $a$ infinitely often with positive probability, else **transient** (equivalently, $\sum_{j=0}^\infty Q^j(a,a) < \infty$; `hoffman2023fusions` §7 cites this as a standard fact, Theorem 1.5.3 of a cited probability reference). `hoffman2023fusions` §7 then supplies the genuinely new construction the whole chapter builds toward:

> **Definition 2 — Markov Decorated Permutations** (`hoffman2023fusions` §7). Given a Markov kernel on $\bar n$, define $\sigma:\bar n\to\overline{2n}$ by: if $a$ is transient, $\sigma(a)=a$; if $a$ is recurrent, let $\sigma(a)$ be the first $b>a$ in $\{1,\dots,2n\}$ such that the run $(a,a{+}1,\dots,b)$, read modulo $n$ past $n$, contains all of $a$'s communicating class.

The paper immediately notes that if $a$ is absorbing (the smallest possible recurrent class, a singleton), $\sigma(a) = a+n$ exactly. **Worked example, reproduced from the paper**: a Markov chain on 9 states whose recurrent classes (cycles, including period-1 cycles) are $(1\,5\,8), (2), (3\,4), (6), (7\,9)$ maps to the decorated permutation $[8,11,4,12,10,15,9,14,16]$. If state 2 were instead transient, the permutation changes only at that one coordinate: $[8,2,4,12,10,15,9,14,16]$ — a clean illustration that this map is entirely determined, coordinate by coordinate, by the chain's own recurrent-class structure, with no free parameters or interpretive choices left over. `hoffman2023fusions` §7 also states a straightforward generalization (**Definition 3**) extending this construction from Markov chains specifically to *arbitrary directed graphs*, defined via strongly-connected components rather than communicating classes — flagged by the authors as potentially useful for network analysis beyond the immediate physics application.

### 5.6 The cell complex structure of $\mathcal{M}_n$

The Markov polytope $\mathcal{M}_n$ is a **cell complex**: the cell $S_\sigma$ is the set of all Markov kernels giving rise to a specific decorated permutation $\sigma$. `hoffman2023fusions` §7 works $\mathcal{M}_2$ out completely (their Fig. 11), and it is worth reproducing in full because it connects every piece of §4.2's geometry to a specific decorated permutation:

| Cell in $\mathcal{M}_2$ | Decorated permutation | Interpretation |
|---|---|---|
| Identity matrix (isolated point, $(0,0)$) | $\sigma=[3,4]$ | Each state maps to itself — a decoration of the identity |
| NOT matrix + entire interior of the square | $\sigma=[2,3]$ | A single communicating class of size 2 |
| Segment $y=0$ minus the origin | $\sigma=[3,2]$ | — |
| Segment $x=0$ minus the origin | $\sigma=[1,4]$ | — |

Note that this cell decomposition, restricted to the boundary and interior of $\mathcal{M}_2$, coincides almost exactly with the flow-field segmentation of §4.2 (source, sinks, the non-flowing periodic point) — "the cells... are precisely the segmentation of $\mathcal{M}_n$ into its different possible flow patterns" (`hoffman2023fusions` §7). This is the paper's own bridge from the purely dynamical picture (§4, flow toward fusion) to the purely combinatorial picture (decorated permutations, and from there, physics).

**The Grassmannian connection, completing the circle.** Given a full-rank $k\times n$ matrix $C$ representing a point of the positive Grassmannian, repeat its $n$ columns to build a $k\times 2n$ matrix $C^*$; define $\sigma_C(a)$ as the first column $b>a$ such that column $a$ of $C$ lies in the span of columns $a{+}1,\dots,b$ of $C^*$ (or $\sigma_C(a)=a$ if column $a$ is zero). "A decorated permutation that codes for a communicating class of size $l$ of a Markov chain also codes for a subspace of dimension $l-1$ in the positive Grassmannian" (`hoffman2023fusions` §7) — and the paper notes (without deriving, only citing) that this same communicating-class/subspace correspondence may underlie two previously-known, independently-discovered facts in mathematical physics: the stationary distribution of the asymmetric simple exclusion process (ASEP) depending on positive-Grassmannian cell combinatorics, and soliton solutions of the KP equation (shallow-water wave interference patterns) depending on which Grassmannian cell a starting point lies in. These citations (to Williams 2005 and Kodama & Williams 2014, as referenced in the original) are offered as *evidence the correspondence is not ad hoc* — the same combinatorial structure keeps turning up in genuinely unrelated corners of mathematical physics — rather than as claims the CA paper itself derives these connections from scratch.

---

## 6. The agent-particle correspondence conjecture

### 6.1 The conjecture, stated precisely

Two facts from physics, both established independently of the conscious-agent program: (1) the decorated permutation is "the deepest structure beyond spacetime that distills physics" — reduced on-shell diagrams, built from decorated permutations, give rise via differential forms to scattering amplitudes (with helicities, or masses and spins, needed in addition once supersymmetry is dropped); (2) any on-shell diagram can be built by combining diagrams containing only single three-legged black or white dots — the *only* diagrams needed for three-particle interactions, which suffice to compute all interactions (`hoffman2023fusions` §6, citing Arkani-Hamed et al.'s amplituhedron program).

Given these two facts and Definition 2's explicit map from Markov chains to decorated permutations, `hoffman2023fusions` §7 states the central conjecture of the entire chapter:

> "We conjecture an **agent–particle correspondence**: a particle (in spacetime) is an aspect of a physical projection of the dynamics of a communicating class of conscious agents to a face of an amplituhedron."

The smallest non-trivial communicating class is a single conscious agent, so the Markov polytope $\mathcal{M}_j$ (describing all possible dynamics of a conscious $j$-agent system) is conjectured to be "the smallest Markov polytope that may have projections onto the dynamics of $j$-particle scattering in spacetime" — with every larger polytope $\mathcal{M}_k$, $k>j$, also potentially carrying such projections (`hoffman2023fusions` §7).

### 6.2 The $\mathcal{M}_3$ worked case

$\mathcal{M}_3$ (§4.4 above) is offered as "the smallest Markov polytope with projections onto the two possible on-shell diagrams for three-particle interactions" (`hoffman2023fusions` §7, Fig. 13). Computer simulations described in the paper indicate two distinct types of flow within $\mathcal{M}_3$'s dynamics — one originating from the identity vertex, the other from the two "maximal derangement" vertices — mirroring the fact that there are exactly two topologically distinct on-shell diagrams for a 3-particle scattering process. The paper conjectures these two flow-types correspond to the two 3-particle amplitude diagrams, but is explicit this is a conjecture awaiting further study: "It will be intriguing to see how physical properties such as mass, momentum, and spin arise as projections from Markov polytopes" (`hoffman2023fusions` §7) — future tense, an open question, not a claimed result.

### 6.3 Honest accounting

This is the chapter's clearest illustration of the parent tutorial's three-tier tagging system in action, and it is worth being explicit about exactly where each tier's boundary falls:

- 🟢 **SOLID**: the Markov polytope $\mathcal{M}_n$ is a well-defined, dimension-$n(n{-}1)$, $n^n$-vertex convex polytope (elementary convex geometry); the decorated-permutation map (Definitions 1–3) is a fully specified, mechanically computable function from any Markov chain (or graph) to a decorated permutation; the cell-complex correspondence between $\mathcal{M}_n$'s geometric structure and its associated decorated permutations is directly verified for $\mathcal{M}_2$ (§5.6) and partially cataloged for $\mathcal{M}_3$ (§4.4).
- 🟡 **SKETCH**: the claim that this decorated-permutation map is the *same* combinatorial object that encodes scattering amplitudes in the amplituhedron program is a real, structurally-motivated conjecture — both sides of the correspondence are independently well-defined mathematical objects, and the paper gives genuine reasons (§5.6's ASEP/KP-equation citations) to think the correspondence is not coincidental — but the correspondence itself, as a *map* from specific Markov-chain dynamics to specific physical scattering processes, has not been derived; only its plausibility has been argued.
- 🔴 **ASPIRATION**: deriving the Standard Model's actual gauge group $SU(3)\times SU(2)\times U(1)$, the specific particle content, masses, or coupling constants from this correspondence. Nothing in `hoffman2023fusions` attempts this, and the paper does not claim otherwise.

---

## 7. Entropic time as a projection artifact — a genuine proof, and worth isolating as such

Amid the conjectural material above, `hoffman2023fusions` §8 (Discussion) contains a small, fully rigorous result that is easy to miss because it arrives without fanfare, but it deserves to be highlighted precisely *because* it is a real proof sitting inside an otherwise heavily speculative section — a useful reminder that "frontier" material is not uniformly speculative throughout.

**Setup.** Consider a homogeneous Markovian dynamics of conscious agents, $X$, with **constant entropy**:
$$
H(X_n) = H(X_{n-1}), \quad \forall n, \tag{Eq. 32}
$$
where $n$ indexes update steps (not number of agents). Such a dynamics has, by construction, no preferred direction in time — entropy is flat.

**Claim.** Any *projection* of this dynamics via conditional probability nonetheless induces an entropic arrow of time: conditioning on the initial state $X_1$,
$$
H(X_n \mid X_1) \geq H(X_{n-1}\mid X_1), \quad \forall n. \tag{Eq. 33}
$$

**Proof** (`hoffman2023fusions` §8, reproduced in full — it is three lines). Conditioning on more information can only reduce or preserve entropy, never increase it:
$$
H(X_n\mid X_1) \geq H(X_n \mid X_1, X_2). \tag{Eq. 34}
$$
By the Markov property, $X_n$'s distribution given the whole past $(X_1,X_2)$ depends only on the most recent state $X_2$:
$$
H(X_n\mid X_1,X_2) = H(X_n\mid X_2). \tag{Eq. 35}
$$
By homogeneity (the dynamics' transition law does not depend on the absolute step index, only on elapsed steps),
$$
H(X_n \mid X_2) = H(X_{n-1}\mid X_1). \tag{Eq. 36}
$$
Chaining (34)–(36) gives (33) directly. $\blacksquare$

The interpretive payoff (🟡, clearly distinguished from the 🟢 proof itself): "the theory of conscious agents may find that entropic time is not a fundamental feature of reality, but merely an artifact of projection" (`hoffman2023fusions` §8). The paper is careful to distinguish its position from other entropic-time proposals in the literature (citing prior work on entropy-driven arrows of time): most such accounts assume our subjective experience of time's arrow *mirrors* an independently real physical evolution. This proposal denies exactly that mirroring — "in fact, evolution by natural selection tells us this is most unlikely to happen" (a direct callback to Chapter II §1's veridicality results) — proposing instead that the arrow of time is projected from an underlying, non-directional dynamics of consciousness. Whether evolutionary competition for scarce resources (itself normally described in temporal terms) can be recovered, with matching rigor, as a further projection of this same non-competitive underlying dynamics is explicitly flagged as unresolved: "This becomes a technical question in the theory of conscious agents, requiring a specification of the dynamics of agents and the precise mapping of this dynamics into spacetime" (`hoffman2023fusions` §8) — 🔴, an open problem stated by the authors, not a completed derivation.

---

## 8. AI consciousness and the simulation reframing

`prentner2024interfacing` extends the 2023 material toward two live contemporary debates: machine consciousness and the simulation hypothesis. Both discussions depend on everything established in Chapters II–III and §1–2 above, so they are reconstructed here rather than treated as a separate topic.

### 8.1 Why AI consciousness looks paradoxical under the standard view, and how CAT dissolves the paradox

Under the "consensus view" that consciousness emerges from the right computations, one should expect artificial systems to become conscious once they implement processes sufficiently similar to a brain's (`prentner2024interfacing` §5.1, citing the Butlin et al. 2023 arXiv survey and Chalmers 2022 on large language models). But if conscious agent theory (CAT) holds and consciousness is genuinely fundamental — not emergent from any physical substrate — then "it is inscrutable how computation could give rise to it," seemingly foreclosing AI consciousness by definition. The paper's resolution leans on Chapter II's Definition 2/§2.5 (computation, in this framework, is not a mechanism that could *cause* consciousness — computation is itself already an **interface representation** of conscious-agent dynamics, per Chapter II's discussion of the CA framework's Turing-equivalence). On this reading, "'computation' is just the name for an interface representation of the dynamics of consciousness. An interface hides and simplifies what lies beyond it" (`prentner2024interfacing` §5.1) — so building better AI does not *create* consciousness, but it can, in principle, give us "new insights into the (pre-existing) realm of conscious agents," the same way physics uses AI as a research tool without AI itself doing the physical discovering (the paper cites Krenn et al. 2022 on AI-assisted scientific discovery as the relevant analogy).

### 8.2 The simulation argument, reframed through conscious realism

Bostrom's (2003) simulation argument, as summarized in `prentner2024interfacing` §5.2: (1) a sufficiently advanced post-human civilization will likely run ancestor-simulations; (2) if the computations are run correctly, the simulated beings will be conscious; (3) therefore it is statistically more probable that we are simulated beings than that we are the original, simulating civilization. Prentner and Hoffman accept a version of the argument's conclusion — that we are, in some sense, "in a simulation" — while rejecting premise (2) as stated: consciousness cannot be produced by *any* physical computation, no matter how fine-grained, because consciousness (per conscious realism) is not a substrate that any physical process could instantiate in the first place. Their reframing: "the simulation we are in is a simulation instantiated in consciousness! After all, consciousness — unlike a physical or biological system — is not a substrate that could itself be simulated. The reasons why the simulation argument... is incorrect is not because it is not sufficiently physicalist, but because it is **not sufficiently idealist**" (`prentner2024interfacing` §5.2, emphasis in original). This is 🟡 **SKETCH** at the level of formal machinery — it is a reinterpretation of an existing philosophical argument through the lens of conscious realism, not a new theorem — but it is worth including because it shows how the same Chapter II/III apparatus (interfaces, projections, conscious realism) is being actively extended to contemporary debates outside physics proper.

### 8.3 Agency beyond the biological, and QBism

`prentner2024interfacing` §4.2 raises, without resolving, whether agency (and hence, on this theory's terms, at least minimal consciousness) might extend beyond living organisms — noting that "some interpretations of quantum mechanics such as QBism" (quantum Bayesianism, citing von Baeyer 2016) already suggest a rich role for observer-agency at even the smallest physical scales, and quoting Thomas Nagel's remark that "if one travels too far down the phylogenetic tree, people gradually shed their faith that there is experience there at all" only to suggest this loss of faith "could be a mere artifact of our (limited) interface" rather than evidence of an actual boundary. This is flagged here as 🔴 **ASPIRATION** / open philosophical territory — the paper explicitly does not commit to a position on where (if anywhere) agency stops, only to the claim that the standard assumption (agency requires biological life) is not obviously forced by the theory's own commitments.

---

## 9. Recursive trace logic: an honest treatment of material outside this corpus

The parent tutorial's §25 describes work the authors themselves, at the time of the cited April 2026 recorded conversation, called "only two months old." This section does what can responsibly be done with that material given the sources actually available here: it separates the parts that are classical, citable mathematics (which can be reconstructed rigorously) from the parts that are, as of this writing, reported claims from an unpublished, in-progress research direction (which are presented as such, without inventing a bibliographic apparatus to make them look more settled than they are).

### 9.1 The trace of a Markov chain — classical, and fully reconstructible

Take a Markov chain on state space $E$, and an observer restricted to a subset $A \subset E$ (with $D = E\setminus A$ "dark," invisible to the observer). Partition the transition matrix into blocks by visibility:
$$
L = \begin{pmatrix} P_{AA} & P_{AD} \\ P_{DA} & P_{DD}\end{pmatrix}.
$$
The **trace** of $L$ onto $A$ — the effective transition matrix actually experienced by an observer who can only see $A$ — is given by the standard Markov-chain reduction formula:
$$
\operatorname{Tr}_A(L) = P_{AA} + P_{AD}\,(I-P_{DD})^{-1}\,P_{DA}.
$$
This formula is decades-old classical probability theory, not new to this research program — it is exactly the kind of reduction Revuz (1984) treats systematically, the same reference cited throughout Chapter III for absorbing-set and asymptotic-periodicity theory. The interpretation is transparent: $(I-P_{DD})^{-1} = \sum_{k=0}^\infty P_{DD}^{\,k}$ sums over every possible length of excursion into the dark states $D$ before returning, and pre/post-multiplying by the entry/exit blocks $P_{AD}, P_{DA}$ stitches each such excursion back onto the visible states $A$. 🟢 **SOLID** — the trace of a finite Markov chain onto a subset of its state space is again a valid Markov chain; this is standard theory, independently verifiable in any Markov chain reference, and does not depend on anything specific to conscious agents.

### 9.2 What the parent tutorial reports beyond the classical formula

The parent tutorial's §25 reports three further claims, attributed there to Hoffman's remarks in the April 2026 recorded conversation: (1) that the trace relation ($M \leq N$ iff $M$ is a trace of $N$) defines a genuine **partial order** on the set of all Markov chains, forming a non-Boolean logic overall, while the set of traces of any *one fixed* chain forms a well-behaved Boolean sub-logic with $2^n$ elements — dubbed "the multiscale logic of minimal surprise" because a trace is provably the coarse-graining that introduces no additional surprise (its stationary measure is exactly the normalized restriction of the bigger chain's stationary measure); (2) that "agency" (attention-shifting) can itself be modeled as a Markov chain over the space of possible observer-windows (i.e., over the trace logic), generating an open-ended recursive hierarchy of policies and meta-policies; (3) a conjecture that the differential "tick rate" between a sub-observer's counter and a full observer's counter, in a nested hierarchy of traces, *is* — or directly produces — the time dilation of special/general relativity, with distances built from commute-time quantities (expected round-trip time between two states, which have a documented correspondence to squared Euclidean distance in the existing Markov-chain literature).

**Why none of this is reproduced here as if it were established.** There is no paper in `papers/` presenting this material — no manuscript to read, no equations to check against a printed derivation, no bib key to cite honestly. The most responsible thing this chapter can do, rather than either omitting the material entirely or dressing it up with false rigor, is exactly what the parent tutorial already did: report it as a **research program in progress**, explicitly attributed to a recorded conversation rather than a publication, and tagged 🔴 **ASPIRATION** throughout. In the authors' own words, as relayed by the parent tutorial: a general closed-form formula for the "join" operation on trace logics (needed to recombine two coarse-grained views into one) is, as of that conversation, "an open mathematical problem with no known general solution," and deriving actual general relativity from this machinery is described as "what I'm working on quite heavily" — future tense, an active project, not a completed result. If and when this work appears as a manuscript in this project's `papers/` directory, it should be integrated into this chapter with the same rigor applied to `hoffman2023fusions` above; until then, honesty about the corpus's limits is itself part of being "technically sound."

---

## 10. Discussion: the Mill Argument, and why the theory refuses to explain experience away

`hoffman2023fusions` §8 closes with an argument worth preserving in full, because it states plainly *why* the entire research program insists on treating consciousness as a fundamental starting point rather than something to be derived from more basic physical facts. Leibniz's **Mill Argument** (quoted at length in the paper): imagine a machine whose structure produced thought and perception, enlarged to the size of a mill, so that one could walk through its interior. "Now, on going into it he would find only pieces working upon one another, but never would he find anything to explain Perception. It is accordingly in the simple substance, and not in the composite nor in a machine that the Perception is to be sought" (Leibniz, quoted in `hoffman2023fusions` §8). The paper's own gloss: "Any theory that reduces consciousness to mechanisms involving states, configurations, or processes of objects will fail to account for any specific conscious experience... What integrated information must be the taste of chocolate and could not be the taste of vanilla? What orchestrated collapse of quantum states must be the smell of coffee and could not be the smell of coconut?"

The paper quotes Steven Pinker conceding essentially the same point from a mainstream cognitive-science perspective: "the last dollop in the theory — that it subjectively feels like something to be such circuitry — may have to be stipulated as a fact about reality where explanation stops." Hoffman, Prakash, and Prentner's response is not to try harder to explain the dollop away, but to make the opposite move: "let us stipulate it and, with a nod to William of Ockham, nothing else. Stipulate a dynamics of experiences and derive, rather than stipulate, spacetime and objects as a projection of the dynamics. This is the project of the theory of conscious agents" (`hoffman2023fusions` §8). Every piece of mathematics in this and the preceding two chapters — the six-tuple, the combination theorems, the wavefunction match, the Markov polytope, the decorated-permutation map — is offered as an installment toward that one stipulated starting point paying for itself, by reconstructing everything downstream of it (perception, physics, scattering amplitudes, time) as *projections*, rather than as separately-posited additional facts about reality.

---

## 11. Honest scorecard for this chapter

| Claim | Status | Source |
|---|---|---|
| Spacetime lacks operational meaning below the Planck scale (two independent physics arguments, both reproduced in full) | 🟢 established physics, not original to this program | `hoffman2023fusions` §2 |
| The Markov polytope $\mathcal{M}_n$ is a well-defined convex polytope of dimension $n(n{-}1)$ with $n^n$ vertices | 🟢 elementary convex geometry | `hoffman2023fusions` §5, Appendix A |
| $\mathcal{M}_2$'s flow field has a source at the identity, a non-flowing periodic point at NOT, and a line of sinks at $y=1-x$ corresponding to fusion (rank collapse) | 🟢 directly computed | `hoffman2023fusions` §5, Eqs. 21–29 |
| The fusion simplex $\mathcal{F}_n$ (unit $(n{-}1)$-simplex of stationary/fused kernels) | 🟢 as a geometric construction; 🟡 as a claim about consciousness "fusing" | `hoffman2023fusions` §5 |
| Decorated permutations (Definitions 1–3) as a well-defined combinatorial map from Markov chains/graphs | 🟢 fully specified, mechanically computable | `hoffman2023fusions` §6–7 |
| Decorated permutations are the invariant combinatorial content of the positive Grassmannian / amplituhedron program | 🟢 established in the physics literature this paper cites | `hoffman2023fusions` §6, citing Arkani-Hamed et al. |
| Agent–particle correspondence: a particle is a projection of a communicating class of conscious agents onto a face of the amplituhedron | 🟡 a real, structurally-motivated conjecture; not derived | `hoffman2023fusions` §7 |
| This correspondence derives the Standard Model's gauge group, particle content, masses, or coupling constants | 🔴 not attempted | — |
| Entropic time as a projection artifact of a constant-entropy, homogeneous, Markovian conscious-agent dynamics | 🟢 fully proven (three-line argument) | `hoffman2023fusions` §8, Eqs. 32–36 |
| Whether evolutionary competition (fitness, scarcity) can likewise be recovered as a projection artifact | 🔴 explicitly posed as an open technical question | `hoffman2023fusions` §8 |
| The simulation argument, reframed as "instantiated in consciousness" rather than in computation | 🟡 philosophical reframing, not a new formal result | `prentner2024interfacing` §5.2 |
| AI consciousness is neither guaranteed by sufficiently brain-like computation nor foreclosed by consciousness being fundamental | 🟡 conceptual resolution via the interface/projection framework | `prentner2024interfacing` §5.1 |
| The trace of a Markov chain, $\operatorname{Tr}_A(L) = P_{AA}+P_{AD}(I-P_{DD})^{-1}P_{DA}$ | 🟢 classical Markov chain theory | Revuz (1984), as cited throughout this corpus; not specific to this program |
| The trace relation forms a non-Boolean partial order ("multiscale logic of minimal surprise"); recursive policies over trace logics; nested-trace time dilation as a route to relativity | 🔴 reported from an unpublished 2026 recorded discussion, **no manuscript in this corpus** — treat as an active, unfinished research direction, not a result | Not in `papers/`; see `content/other.md` for the source recording |

---

## References (bib keys used in this chapter)

`hoffman2023fusions` · `prentner2024interfacing`

Full bibliographic data: [`../papers/references_report.md`](../papers/references_report.md). Full BibTeX: [`../papers/hoffman_conscious_agents.bib`](../papers/hoffman_conscious_agents.bib).

*For the recursive-trace-logic material described in §9, no primary source exists in this project's corpus as of this writing; see the recorded discussion linked in [`content/other.md`](other.md).*
