# Chapter III — The Bridge to Physics: From Markov Chains to Wavefunctions

*An extended, paper-grounded companion to Part III of [`conscious-agents-zero-to-hero.md`](conscious-agents-zero-to-hero.md), continuing directly from [Chapter II](chapter-ii-theory-of-conscious-agents.md). Every claim is traced to a specific paper in [`papers/`](../papers/), cited by bib key. Primary sources: `hoffman2014objects` (Hoffman & Prakash, *Objects of Consciousness*, 2014, §8 "Microphysical Objects" and §9 objections), and `hoffman2015origin` (Hoffman, *The Origin of Time in Conscious Agents*, 2015, §6–8). Background: `bennett1991unity`, `massaro1989observer` (the Bennett–Hoffman–Prakash *Observer Mechanics* lineage this derivation grows out of).*

Tags carried over from Chapter II:

> 🟢 **SOLID** — an actual theorem, checkable by direct computation.
> 🟡 **SKETCH** — a real mathematical construction, proposed/conjectural as physics.
> 🔴 **ASPIRATION** — a stated goal, not yet mathematics.

---

## 1. What this chapter derives, and why it matters

Chapter II ended with a single object: the **qualia kernel** $Q = DAP$, an ordinary stochastic matrix on an agent's experience space, obtained by composing perception, decision, and action into one loop. Everything in this chapter is about the *long-run* (asymptotic) behavior of that one object — and the headline result, from `hoffman2014objects` §8, is genuinely striking: **the harmonic functions of the space-time chain built from a conscious agent's dynamics are algebraically identical, term for term, to the wavefunction of a nonrelativistic quantum free particle.** This is not a metaphor or a suggestive analogy dressed in equations — it is an equation-by-equation match that you can verify by direct substitution, which is why the parent tutorial (and this chapter) tags it 🟢 **SOLID**, with the caveat — stated by the authors themselves, and preserved carefully below — that it is solid *and narrow*: it reproduces the kinematic shape of a free particle's asymptotic wave, not the dynamical content of the Schrödinger equation, not interactions, not gauge structure.

This chapter rebuilds the derivation from the primary sources at a pace slower than either paper actually uses, because both `hoffman2014objects` §8 and `hoffman2015origin` §7 state the result in essentially one dense paragraph each, trusting the reader to unpack the machinery of Markov chain asymptotics (invariant events, periodic sub-classes, harmonic functions) on the fly. We unpack it here, with a worked numeric example carried through every stage — and, going one step further than the parent tutorial's period-2 example, we carry a **period-4** example through as well, because period 2 only ever produces real eigenvalues ($\pm 1$) and can hide the fact that the construction is fundamentally *complex*-valued.

---

## 2. The mathematical machinery, rebuilt from the source

### 2.1 Absorbing sets, periods, and asymptotic events — Revuz's theorem

Both source papers lean on the same classical reference throughout: Revuz, *Markov Chains* (1984), cited explicitly in `hoffman2014objects` (footnote 53) and `hoffman2015origin` (§7, citing "Revuz 1984; Hoffman and Prakash 2014"). The relevant classical fact, restated in the CA papers' own notation:

For a finite Markov chain with kernel $L$ that is **quasi-compact** (automatic when the state space is finite, as it always is in the worked examples here), the state space decomposes into:
- **transient states**, visited only finitely often;
- a finite collection of **invariant events** (absorbing sets), indexed $\rho$, whose union exhausts everything the chain does asymptotically — once the chain enters one, it never leaves;
- within each invariant event $\rho$, a further partition into $d_\rho$ **asymptotic events**, indexed $\delta = 1,\dots,d_\rho$, such that once the chain enters asymptotic event $\delta$, it proceeds *with certainty* to $\delta+1, \delta+2,\dots$, cycling around the $d_\rho$ sub-classes forever.

Write $U_{\rho,\delta}$ for the **indicator function** of asymptotic event $\delta$ within class $\rho$: $U_{\rho,\delta}(e) = 1$ if state $e$ belongs to that sub-class, else 0. In the running example of Chapter II §3.2 (the two-agent, 16-state dynamics with six absorbing sets), $\rho$ ranges over $1,\dots,6$; $d_1 = d_2 = 1$ (the two singleton fixed points); $d_3 = 2$ (the two-cycle $\{|0101\rangle,|1010\rangle\}$); $d_4=d_5=d_6=4$ (the three period-4 cycles). $U_{1,1}$ takes value 1 only on $|0000\rangle$; $U_{5,3}$ takes value 1 only on $|1100\rangle$ (`hoffman2014objects` §8).

The key structural fact — "you must move from event $\delta$ to event $\delta+1$, with certainty" — is exactly the statement
$$
L\,U_{\rho,\delta} = U_{\rho,\delta-1}. \tag{F1}
$$
(Check directly: $(LU_{\rho,\delta})(e) = \Pr[\text{next state in event }\delta \mid \text{current state }e]$, which equals 1 exactly when $e$'s *current* asymptotic event is $\delta-1$, since $\delta-1\to\delta$ is the forced transition, and 0 otherwise — which is precisely $U_{\rho,\delta-1}(e)$.) This single identity is the entire engine of what follows; every subsequent equation in this chapter reduces to bookkeeping around (F1).

### 2.2 The space-time chain

An agent's counter $N$ (Chapter II §2.3) supplies a running step index, but $L$ by itself has no memory of *how many* steps have elapsed — it only relates "current state" to "next state." To talk about a genuine wave, a function of *both* place and time, `hoffman2015origin` §7 constructs the **space-time chain** $Q$ on the enlarged space $E \times \mathbb{N}$:
$$
Q\big((e,n),(\cdot,n{+}1)\big) = L(e,\cdot),
$$
i.e., $Q$ advances the clock by exactly one tick per step while the state evolves under $L$ exactly as before — "the original chain together with an extra component added to its state vector that counts the number of steps in the chain up to each point" (`hoffman2015origin` §7). A function $g(e,n)$ (write $g_n := g(\cdot,n)$ for the time-$n$ slice) is **$Q$-harmonic** if $Qg=g$, which unwinds to
$$
L\,g_{n+1} = g_n. \tag{F2}
$$
In words: apply the one-step operator to *tomorrow's* function and recover *today's*. This is exactly $Lh=h$ (the ordinary harmonic-function condition) applied separately at each time slice and stitched together by a shift in the time index — nothing more exotic than that, despite how it will look once dressed in physics notation below.

### 2.3 Building the eigenfunction, and proving it works

Define, for each invariant event $\rho$ and each integer $k$ modulo $d_\rho$,
$$
\lambda_{\rho,k} = \exp(2\pi i k / d_\rho), \tag{Eq. 41, hoffman2014objects}
$$
$$
f_{\rho,k} = \sum_{\delta=1}^{d_\rho} (\lambda_{\rho,k})^\delta\, U_{\rho,\delta}. \tag{Eq. 42}
$$

`hoffman2014objects` §8 states as a theorem (citing the correspondence between eigenfunctions of $L$ and harmonic functions of $Q$, Revuz 1984 p.210) that
$$
L f_{\rho,k} = \lambda_{\rho,k}\,f_{\rho,k}. \tag{Eq. 43}
$$
**Proof**, filling in the two-line argument the papers leave implicit, using (F1) term by term:
$$
Lf_{\rho,k} = \sum_\delta (\lambda_{\rho,k})^\delta\,(LU_{\rho,\delta}) \overset{\text{(F1)}}{=} \sum_\delta (\lambda_{\rho,k})^\delta\, U_{\rho,\delta-1} = \sum_{\delta'} (\lambda_{\rho,k})^{\delta'+1}\,U_{\rho,\delta'} = \lambda_{\rho,k}\,f_{\rho,k}. \quad\blacksquare
$$
(re-indexing $\delta' = \delta - 1$ in the penultimate step, and using that $(\lambda_{\rho,k})^{d_\rho} = 1$ so the cyclic wraparound of the index $\delta$ modulo $d_\rho$ costs nothing).

**A larger worked example: period 4.** Take absorbing set $\rho=4$ from Chapter II's 16-state example, $\{|0001\rangle,|1000\rangle,|0100\rangle,|0010\rangle\}$, cycling in that order, so $d_4 = 4$. The four eigenvalues are the fourth roots of unity:
$$
\lambda_{4,0} = 1, \quad \lambda_{4,1} = i, \quad \lambda_{4,2} = -1, \quad \lambda_{4,3} = -i.
$$
Take $k=1$, so $\lambda = i$. Writing $U_1,U_2,U_3,U_4$ for the indicators of $|0001\rangle,|1000\rangle,|0100\rangle,|0010\rangle$ respectively (in cycling order), the eigenfunction is
$$
f_{4,1} = i^1 U_1 + i^2 U_2 + i^3 U_3 + i^4 U_4 = i\,U_1 - U_2 - i\,U_3 + U_4,
$$
i.e., as a vector over the four states, $f_{4,1} = (i,-1,-i,1)$. Apply $L$ (which cyclically shifts $\delta \to \delta - 1$ per (F1), i.e. sends the value at position $\delta$ to position $\delta-1$): $Lf_{4,1} = (-1,-i,1,i)$. And $\lambda_{4,1}\,f_{4,1} = i\cdot(i,-1,-i,1) = (-1,-i,1,i)$. **These match exactly.** ✓ This example is worth having in addition to the parent tutorial's period-2 case precisely because $\lambda=i$ is genuinely complex — the construction is not secretly real-valued, and the imaginary unit here is not decorative: it is the same $i$ that will reappear as the imaginary unit of the physicist's $\mathrm{cis}(\cdot)$ notation in §2.5 below.

### 2.4 Making it a genuine wave over time

Build the space-time chain (§2.2) from $L|_\rho$, and define
$$
g_{\rho,k}(\cdot,n) := (\lambda_{\rho,k})^{-n}\,f_{\rho,k}. \tag{Eq. 44}
$$
**Claim:** this satisfies the $Q$-harmonic condition (F2). **Proof:**
$$
Lg_{n+1} = L\big((\lambda)^{-(n+1)}f\big) = (\lambda)^{-(n+1)}(Lf) = (\lambda)^{-(n+1)}\cdot\lambda f = (\lambda)^{-n}f = g_n. \quad\blacksquare
$$

**Continuing the period-4 example.** $(\lambda_{4,1})^{-n} = i^{-n}$, so $g_0 = f_{4,1} = (i,-1,-i,1)$, $g_1 = i^{-1}f = -i\cdot(i,-1,-i,1) = (1,i,-1,-i)$, $g_2 = i^{-2}f = -f = (-i,1,i,-1)$, $g_3 = i^{-3}f = i\cdot f = (-1,-i,1,i)$, $g_4 = i^{-4}f = f = g_0$ — a genuine period-4 oscillation over time, distinct from (and richer than) the period-2 flip-every-tick behavior the parent tutorial's smaller example produces, but built from exactly the same machinery.

### 2.5 The wave form, and the dictionary to physics

Substitute (Eq. 41) into (Eqs. 42/44):
$$
g_{\rho,k}(\delta,n) = (\lambda_{\rho,k})^{\delta-n} = \exp\!\Big(2\pi i k\,\frac{\delta-n}{d_\rho}\Big).
$$
Define the rescaled period $d_{\rho,k} := d_\rho/k$. Then
$$
\boxed{\ g_{\rho,k}(\delta,n) = \operatorname{cis}\!\left(2\pi\frac{\delta}{d_{\rho,k}} - 2\pi\frac{n}{d_{\rho,k}}\right)\ } \tag{Eq. 45, hoffman2014objects}
$$
where $\operatorname{cis}(\theta) := e^{i\theta} = \cos\theta+i\sin\theta$. **Check against the period-4 example:** $\rho=4,k=1 \Rightarrow d_{4,1}=4$. At $\delta=1,n=0$: $\operatorname{cis}(2\pi/4) = \operatorname{cis}(\pi/2) = i$ — matches the coefficient of $U_1$ in $g_0=(i,-1,-i,1)$ computed above. ✓

`hoffman2014objects` §8 places this next to the textbook free-particle plane wave (citing a standard quantum mechanics reference, [69, §7.2.3]):
$$
\psi(x,t) = A\sum_x \operatorname{cis}\!\left(2\pi\frac{x}{\lambda_{\text{wave}}} - 2\pi\frac{t}{T}\right)|x\rangle. \tag{Eq. 46}
$$
The identification, spelled out explicitly by the authors (`hoffman2014objects` §8):

| Physics | Conscious-agent dynamics |
|---|---|
| Position $x$ | asymptotic-event index $\delta$ |
| Basis ket $|x\rangle$ | Indicator function $U_{\rho,\delta}$ |
| Time $t$ | Step counter $n$ |
| Wavelength $\lambda_{\text{wave}}$, period $T$ | $d_{\rho,k}$ (plays both roles: "the speed of the wave is 1 in these units") |
| Momentum $p = h/\lambda_{\text{wave}}$ | $p = h/d_{\rho,k}$ |
| Energy $E = hc/T$ | $E = hc/d_{\rho,k}$ |

**Continuing the numeric example once more, all the way to physical units.** For $\rho=4,k=1$: $d_{4,1}=4$, so momentum $p = h/4$ and energy $E = hc/4$, in whatever units the underlying "one Markov step" is calibrated to represent one Planck time. Compare $\rho=3,k=1$ from the parent tutorial's period-2 example: $d_{3,1}=2$, giving $p=h/2, E=hc/2$ — a *different*, larger momentum and energy than the period-4 case, purely because the period-4 cycle is "longer" (wraps around less often per step) and hence corresponds, in the dictionary, to a longer wavelength and lower momentum. This is a genuinely satisfying internal consistency check: **shorter periods correspond to higher momentum/energy**, exactly matching the ordinary de Broglie relation's inverse dependence on wavelength — and this fell straight out of the Markov-chain combinatorics, without being assumed.

### 2.6 What this result is, and is not

`hoffman2014objects` §8 itself states the scope-limitation candidly, immediately after presenting the identification: "This identification is for nonrelativistic particles. For the relativistic case we sketch a promising direction to explore" (taken up in §4 below). The parent tutorial's own scorecard (🟢 **SOLID, but narrow**) is the authors' own assessment, not an external hedge added later: this is a genuine, checkable, term-by-term algebraic match between any finite Markov chain's asymptotic periodic behavior and the kinematic shape of a free-particle plane wave. It is explicitly **not**: the Schrödinger *equation*'s dynamics (only the asymptotic/steady-state shape is matched here, not the transient time-evolution operator, $i\hbar\,\partial_t\psi = \hat H\psi$); interactions between particles; gauge symmetry; anything resembling the electromagnetic, weak, strong, or gravitational forces. It is a kinematic analogy for a single free particle, derived from the combinatorics of periodicity in finite Markov chains — real and worth taking seriously, but several large steps short of "unifying physics," a gap the authors themselves never try to paper over.

---

## 3. Objections and replies bearing directly on this bridge

`hoffman2014objects` §9 addresses several objections specifically about the propriety of casting physics-relevant claims in this formalism, worth restating here because they bear more directly on Chapters III/IV than on Chapter II's combination-problem material:

**Objection 6** ("Your theory doesn't reject object permanence, because conscious agents are the 'objects' that give rise to our perceptions of size and shape, and those agents are permanent even when we're not looking.") **Reply:** Conscious realism does propose that conscious agents exist unperceived (rejecting solipsism), "but it also rejects object permanence, viz., the doctrine that 3D space and physical objects exist when they are not perceived. To claim that conscious agents exist unperceived differs from the claim that unconscious objects and space-time exist unperceived." This distinction is exactly what licenses the later move (§4 below, and all of Chapter IV) of treating space-time itself as *derived* rather than as the stage on which conscious agents act.

**Objection 8** ("Your proposal that consciousness, rather than physics, is fundamental places consciousness outside of science.") **Reply:** "Absolutely not. The onus is on us to provide a mathematically rigorous theory of consciousness, to show how current physics falls out as a special case, and to make new testable predictions beyond those of current physics." This chapter's derivation is presented by the authors as exactly the first installment of that onus — "how current physics falls out as a special case" is, quite literally, what §2 above does for one free particle's kinematics.

**Objection 3** ("Why do you represent qualia by a probability space $X$?") **Reply:** because probability spaces and information are Shannon-equivalent transforms of each other, so representing qualia as a probability space is a *claim that qualia carry information*, not a claim they resemble coin flips or equity markets; and nothing about this representation forces qualia to have metrics or dimensions, though "certain qualia spaces, such as the space of phenomenal colors, do exhibit metrical and dimensional properties" — a caveat directly relevant to the geometric-algebra sketch below, which *does* impose metric-like structure on a specific six-dimensional space built from two joined agents.

---

## 4. Toward relativity: the geometric-algebra sketch

### 4.1 The construction

`hoffman2014objects` §8 extends the free-particle match toward relativistic physics with a genuinely different mathematical tool: **geometric algebra** (citing Doran & Lasenby 2003). For two conscious agents in an undirected join, the joint state has **six** real components: $N_1, N_2, X_1, G_1, X_2, G_2$. The proposal is to identify these six quantities with the six generating vectors of the geometric algebra $\mathcal{G}(2,4)$ — the **conformal geometric algebra** for Minkowski space-time of signature $(1,3)$. The conformal group contains the Poincaré group (space-time translations and rotations) as a subgroup, but the *full* conformal group is what appears in supersymmetric and massless-relativistic theories. The **rotor group** of $\mathcal{G}(2,4)$ is isomorphic to $SU(2,2)$, which connects — via Roger Penrose's twistor program for quantum gravity — to an entirely separate, well-established research tradition in mathematical physics (`hoffman2014objects` §8, citing Penrose [71]).

`hoffman2015origin` §7 restates the same construction almost verbatim, extending it slightly: "Given any pseudograph of conscious agents, we can take each interacting pair and create a new local patch of relativistic space-time for that pair by means of a geometric algebra $\mathcal{G}(2,4)$ that describes their dynamics. We can then take the combination of each pair to create a new single conscious agent out of that pair, and then create new patches of relativistic space-time... In this fashion we can proceed to create a **nested hierarchy of geometric algebras**, a hierarchy of patches of relativistic space-time from the Planck scale to macroscopic scales." The metric, in this proposal, "would arise from the channel capacity of the joined agents" (`hoffman2014objects` §8) — i.e., from the information-theoretic bandwidth of the $P,D,A$ kernels connecting them (Chapter II §2.2), not from any independently posited geometric structure.

### 4.2 A genuine discrepancy between the two papers, worth flagging explicitly

Careful reading of the two source papers surfaces a real inconsistency, not merely a difference of emphasis. `hoffman2014objects` §8 states: "The components $N_1$ and $N_2$ have positive signature, and the remaining have negative signature." `hoffman2015origin` §7, describing the identical construction one year earlier (the paper is dated 2014 in `Cosmology` but published prior to the *Objects of Consciousness* Frontiers paper's final form), states the *opposite*: "the counters $N_1$ and $N_2$ have negative signature and the remaining components have positive signature." Both cannot be simultaneously the authors' considered position on which six-dimensional signature convention $\mathcal{G}(2,4)$ requires — this is worth surfacing plainly rather than silently picking whichever seems more standard, precisely because it is diagnostic of the maturity level of this specific piece of the research program: it is a **sketch**, in the sense the parent tutorial's tagging system intends, not a load-bearing derivation whose every sign convention has been fixed and cross-checked across papers. Readers who want to pursue the geometric-algebra thread seriously should treat the signature assignment as unsettled in the primary literature itself, not merely under-explained.

### 4.3 What this sketch does and does not establish

The honest inventory, matching the parent tutorial's tag: 🟡 **SKETCH**. This is a real, *named* algebraic structure (not an invented one — $\mathcal{G}(2,4)$, $SU(2,2)$, and the twistor connection are all pre-existing, independently studied objects in mathematical physics) with the *right dimension count* (six real state components; six generators of $\mathcal{G}(2,4)$), explicitly offered by the authors as "a promising direction to explore," not a derivation. No metric tensor is derived from first principles (only gestured at, via channel capacity); no field equations are produced; no curvature is derived; the massive case is explicitly acknowledged to require "symmetry breaking," with only a bare pointer toward "hierarchies of stopping times in the Markovian dynamics" as a "promising direction" (`hoffman2014objects` §8) — a research direction outline, not executed mathematics.

### 4.4 Stopping times and the scale of macroscopic observers

One quantitative detail worth preserving from `hoffman2014objects` §8, because it is the paper's only concrete numeric gesture toward how big this hierarchy would need to be: "This hierarchy of stopping times proceeds all the way up to the slow times of our own conscious experiences as human observers (roughly $10^{40}$ times slower than the Planck time)." This number is not derived within the paper — it is an order-of-magnitude comparison (human perceptual/cognitive timescales, milliseconds to seconds, against the Planck time, $\sim 5\times10^{-44}\,\text{s}$) offered to give a sense of how many "levels" of combination-and-stopping-time hierarchy the proposal would need to traverse to connect Planck-scale agent dynamics to human-scale conscious experience — a genuinely enormous number of levels, and the paper does not attempt to specify the branching structure of that hierarchy beyond naming it as an open direction.

---

## 5. Subjective time and the simultaneity correspondence

### 5.1 From counter to "I-time"

`hoffman2015origin` §6 builds a notion of time entirely from the counter $N$ already present in Chapter II's Definition 1, without importing any notion of a background universal clock. Each conscious agent's sequence of perceptual experiences, received via $P$, forms a **totally ordered set** $S$, with cardinality given by the counter $N$. $T$, this total order, "is not physical time, but it is a subjective 'time' for the conscious agent." The experience $S(N)$ is the agent's "now"; $S(1),\dots,S(N{-}1)$ its "past"; anticipating $S(N{+}1)$ is anticipating its "future" (`hoffman2015origin` §6).

The paper explicitly grounds this in Einstein's own 1921 remarks on subjective time, quoted directly: "The experiences of an individual appear to us arranged in a series of events; in this series the single events which we remember appear to be ordered according to the criterion of 'earlier' and 'later,' which cannot be analyzed further. There exists, therefore, for the individual, an I-time, or subjective time. This in itself is not measurable" (Einstein 1921, quoted in `hoffman2015origin` §6). The point of citing Einstein here is precise: Hoffman is not claiming the theory of conscious agents *invents* subjective, pre-metric time — he is claiming it *formalizes* a notion Einstein himself already distinguished from physical, measurable time, using nothing more than the counter already built into the definition of a conscious agent.

### 5.2 Simultaneity without an ambient clock

When agent $C_i$ receives a message on $P_i$, its counter $N_i$ increments and a new experience is appended to $S_i$. If, in consequence, $C_i$ sends a message to $C_j$ (via the join structure of Chapter II §2.6, $A_i = P_j$), then $C_j$'s counter $N_j$ increments and $S_j$ grows in turn. `hoffman2015origin` §6 draws the careful conclusion: "although there is no absolute ambient time around, nevertheless we can say that there is a 'simultaneity' correspondence between the conscious experiences $S_i(N_i)$ and $S_j(N_j)$, even though in general $N_i \neq N_j$." This correspondence can be propagated — pairwise — across an entire pseudograph of joined agents, connecting each agent's private total order $T$ to every other's.

Whether this propagation can be extended to build a single **global total order** — an "absolute time" for the entire network — is explicitly left open: "It is an interesting and open technical question to ask for what pseudographs and agent dynamics it is possible to use the 'simultaneity' correspondences between all pairs of conscious agents to create a global total order of conscious experiences for the entire collection of conscious agents" (`hoffman2015origin` §6). 🔴 **ASPIRATION** — this is a clearly stated open problem, not a claimed result, and the parent tutorial's §22 preserves this framing faithfully.

---

## 6. The Invention of Space Theorem, entropy, and holography

`hoffman2015origin` §8 (Conclusion) sketches a chain of connections that the parent tutorial's §22 compresses to a single paragraph; it is worth unpacking because each link is a distinct, citable idea, even though the chain as a whole is speculative.

**The theorem itself.** "It is straightforward to prove an **Invention of Space Theorem** which states that space-time symmetries in the perceptions and actions of any observer (e.g., Euclidean, Galilean, Lorentz, Poincaré, conformal spacetime) do not entail that objective reality itself has those symmetries, even though the perceptions and actions operate through that objective reality" (`hoffman2015origin` §8, citing "Hoffman et al. under review" — i.e., at the time of writing, this specific theorem's proof was not yet published as a standalone, citable result; it is reported here as an announced theorem, not one whose proof this corpus contains). The content, in plain terms: seeing the world *as* Euclidean (or Lorentzian) is not evidence the world *is* Euclidean (or Lorentzian) — perceived symmetry could instead be "compact and convenient representations of aspects of the fitness functions critical to our evolution" (`hoffman2015origin` §8), tying this theorem directly back to Chapter II §1's evolutionary-game material: a perceptual system's symmetries are exactly the kind of thing natural selection could favor for *computational convenience*, independent of whether the represented structure has any counterpart in whatever lies beneath the interface.

**Entropy as ignorance, and the holographic principle.** Hoffman speculates that "the metric of space-time is created to represent, and be proportional to, the potential knowledge (or, conversely, ignorance) of the observer," and that under this reading, the second law of thermodynamics might "simply emerge as a consequence of this construction of space-time in which larger volumes code for greater ignorance, and smaller volumes code for greater knowledge" (`hoffman2015origin` §8). He connects this explicitly to Bekenstein's (1981) discovery that a black hole's entropy is proportional to the *area* of its event horizon (not its volume), and to the subsequent **holographic principle** (Susskind 1995) built on that discovery — noting the connection "also comports well with a subjectivist view of the probabilities underlying entropy, taking those probabilities to reflect our ignorance rather than being measures of objective indeterminism" (`hoffman2015origin` §8).

**Causal sets, contrasted.** Finally, the paper draws a deliberate contrast with **causal set theory** (Dowker 2013), an independent, well-established research program in quantum gravity that also posits discrete, atomistic structure underlying continuous space-time: "It will be interesting to look for connections between this approach to space-time and the approach of causal set theory; where causal set theory has space-time atoms as primitives, we here have conscious agents as primitives and space-time atoms emerge as linear representations of their dynamics" (`hoffman2015origin` §7). This comparison is offered honestly as a *structural parallel worth investigating*, not as an equivalence already established — 🔴 **ASPIRATION**, clearly labeled as such by the "it will be interesting to look for" phrasing in the original.

Taken as a whole, §6 of this chapter is the *most* speculative material in the bridge-to-physics program — genuinely more so than the free-particle wavefunction match of §2, which is a checkable theorem, or even the geometric-algebra sketch of §4, which at least identifies a specific named algebraic object with the right dimension count. The entropy/holography/causal-set material in `hoffman2015origin` §8 is closer to a set of suggestive analogies the author flags for future investigation than to a research program with any stated technical machinery yet in place — worth knowing about, because it previews the kind of exploratory reasoning that becomes the entire subject matter of Chapter IV, but it should not be mistaken for anything more settled than that.

---

## 7. Honest scorecard for this chapter

| Claim | Status | Source |
|---|---|---|
| The eigenfunction $f_{\rho,k}$ of the asymptotic Markov dynamics is a genuine eigenfunction of $L$, $Lf_{\rho,k}=\lambda_{\rho,k}f_{\rho,k}$ | 🟢 proven (two-line inductive argument from (F1)) | `hoffman2014objects` §8, Eq. 43 |
| $g_{\rho,k}(\cdot,n) = \lambda_{\rho,k}^{-n}f_{\rho,k}$ is $Q$-harmonic for the space-time chain | 🟢 proven | `hoffman2014objects` §8, Eq. 44; `hoffman2015origin` §7 |
| This $Q$-harmonic function has exactly the algebraic form of the free-particle wavefunction, with an explicit physical dictionary (position↔asymptotic event, time↔step, wavelength/period↔$d_{\rho,k}$, momentum/energy inversely proportional to $d_{\rho,k}$) | 🟢 solid, but narrow (kinematic shape only, not dynamics/interactions/forces) | `hoffman2014objects` §8, Eqs. 45–46 |
| Two joined agents' six state components ($N_1,N_2,X_1,G_1,X_2,G_2$) form the generators of the conformal geometric algebra $\mathcal{G}(2,4)$ for Minkowski space-time, connecting to $SU(2,2)$ and Penrose's twistor program | 🟡 suggestive dimension count and named target structure; signature convention is inconsistent between the two source papers themselves | `hoffman2014objects` §8; `hoffman2015origin` §7 |
| A nested hierarchy of such geometric algebras, built by repeated combination, could construct space-time from Planck to macroscopic scale, with the metric arising from channel capacity | 🔴 stated direction, no construction given | `hoffman2015origin` §7 |
| Each conscious agent's counter $N$ generates a subjective total order ("I-time"); joined agents admit a pairwise simultaneity correspondence even when $N_i \neq N_j$ | 🟢 as a formal consequence of the join structure of Chapter II §2.6 | `hoffman2015origin` §6 |
| Propagating simultaneity correspondences across an arbitrary pseudograph can bootstrap a single global total order ("absolute time") | 🔴 explicitly posed as an open technical question by the author | `hoffman2015origin` §6 |
| The Invention of Space Theorem (perceived spacetime symmetries don't entail objective symmetries) | 🟡 announced ("straightforward to prove"), but cited to a paper "under review" not available in this corpus — treat as reported, not independently verified here | `hoffman2015origin` §8 |
| Entropy-as-ignorance / holographic-principle / causal-set connections | 🔴 exploratory analogies, explicitly framed by the author as directions "to look for," not results | `hoffman2015origin` §8 |

The strongest result in this chapter — and, per the parent tutorial's own closing assessment, arguably the strongest result in the entire research program — is §2's wavefunction match. Everything from §4 onward is markedly more speculative, and the papers are candid about exactly where that transition happens. Chapter IV picks up from here, following the research program's own trajectory from this 2014–2015 material into the considerably more exploratory 2022–2023 work on Markov polytopes and decorated permutations, and beyond.

---

## References (bib keys used in this chapter)

`hoffman2014objects` · `hoffman2015origin` · `bennett1991unity` · `massaro1989observer`

Full bibliographic data: [`../papers/references_report.md`](../papers/references_report.md). Full BibTeX: [`../papers/hoffman_conscious_agents.bib`](../papers/hoffman_conscious_agents.bib).
