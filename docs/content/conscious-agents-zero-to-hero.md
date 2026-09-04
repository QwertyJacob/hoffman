# Conscious Agents & the Physics-Unification Project: Zero to Hero

*A from-scratch mathematical tour of Donald Hoffman & Chetan Prakash's theory of conscious agents, and the ongoing project to derive spacetime, quantum theory, and (eventually) the forces of physics from it.*

---

## How to read this document

This is long on purpose. It has four parts:

- **Part I — Math Toolkit.** Everything you need, built from the ground up: Markov chains, eigenvectors, complex exponentials, harmonic functions. If you have engineering-level linear algebra and signal processing, most of this will click fast — I'll point out exactly where.
- **Part II — The Theory.** What a "conscious agent" precisely *is*, and why Hoffman thinks this is the right starting point at all.
- **Part III — The Bridge to Physics.** The actual derivation: how a Markov chain's long-run behavior ends up looking like a quantum wavefunction. This is where we go *very* slowly, step by step, with a worked numeric example at every stage.
- **Part IV — The Frontier (2023–2026).** The newer, much less settled material: Markov polytopes, decorated permutations, "recursive trace logic," and the live attempt to derive special/general relativity. I flag clearly what's proven vs. conjectured vs. aspirational.

Throughout, I'll use three tags:

> 🟢 **SOLID** — an actual theorem, checkable by direct computation.
> 🟡 **SKETCH** — a real mathematical construction, but proposed/conjectural as physics.
> 🔴 **ASPIRATION** — a stated goal, not yet mathematics.

---

# PART I — MATH TOOLKIT (from zero)

## 1. Sets, functions, and the one probability fact you need

A **set** is a collection of things (states, outcomes, whatever). A **function** on a set $E$ assigns a number to each element: $f: E \to \mathbb{R}$ (or $\mathbb{C}$). If $E = \{A, B\}$, a function $f$ is just a pair of numbers $(f(A), f(B))$ — i.e., **a function on a finite set is the same thing as a vector**. This equivalence (function ⟷ vector) is used constantly below; when I write $f$ as a column vector, I mean the function that reads off its entries.

A **probability distribution** on $E$ is a function $\pi$ with $\pi(e) \geq 0$ and $\sum_e \pi(e) = 1$. Distributions are naturally **row vectors** in what follows; functions are naturally **column vectors**. Keeping this row/column distinction straight is 90% of not getting confused later.

## 2. Stochastic matrices (a refresher, but the notation matters)

A **stochastic matrix** (a.k.a. Markovian kernel, in the finite case) is a matrix $L$ where every row is a probability distribution: entries $\geq 0$, each row sums to 1. Entry $L(e, e')$ = probability of moving to state $e'$ given you're currently at $e$.

There are **two different things** you can do with $L$, and confusing them is exactly what tripped us up earlier:

**(a) Push a distribution forward.** If $\pi$ is a row vector (today's distribution over states), then $\pi L$ is a row vector (tomorrow's distribution). This is the usual "Markov chain" picture — probability mass flowing forward through time.

**(b) Pull a function backward.** If $h$ is a column vector (a function assigning a number to each state — think "payoff" or "value"), then $Lh$ is a column vector whose entry at $e$ is
$$(Lh)(e) = \sum_{e'} L(e,e')\, h(e') = \mathbb{E}[h(\text{tomorrow's state}) \mid \text{today's state} = e]$$
**$Lh$ is "the expected value of $h$, one step from now, given where you are today."**

This second operation — $L$ acting on functions, not on distributions — is the one the whole derivation runs on. It's exactly the same object engineers know as a **transition operator** or (in the continuous case) a **Markov semigroup generator**.

## 3. Harmonic functions — you already know this from PDEs

**Definition:** $h$ is **harmonic** for $L$ if $Lh = h$.

Spelled out: $h(e) = \sum_{e'} L(e,e')\,h(e')$ for every state $e$ — *the value at a point equals the probability-weighted average of the values at the points you can reach next.*

If you've ever solved Laplace's equation numerically (finite differences, relaxation methods), **this is the exact same equation**: the discrete mean-value property. A steady-state temperature field with no sources is "harmonic" in precisely this sense — the temperature at a node equals the average of its neighbors. Markov-chain harmonic functions are the same idea, just with the neighbors weighted by transition probabilities instead of uniformly.

**Tiny example.** Two states $\{A, B\}$, with $L = \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix}$ (deterministic swap: from $A$ you always go to $B$ and vice versa). Try $h = (1,1)$ (constant function): $Lh = (h(B), h(A)) = (1,1) = h$. ✓ Constants are always harmonic (a trivial but useful check). Try $h=(1,-1)$: $Lh = (h(B),h(A)) = (-1,1) = -h$. Not harmonic — but it *is* an **eigenfunction** with eigenvalue $-1$. That leads us to the next tool.

## 4. Eigenvalues/eigenvectors, but phrased for functions

$h$ is an eigenfunction of $L$ with eigenvalue $\lambda$ if $Lh = \lambda h$. (Harmonic = eigenfunction with $\lambda = 1$, a special case.)

For the swap matrix above:
- $\lambda = 1$: eigenvector $(1,1)$ — the "DC component," constant across states.
- $\lambda = -1$: eigenvector $(1,-1)$ — the "alternating component."

If you've done any digital signal processing: **a 2-state deterministic swap is a circulant/permutation matrix, and this is exactly its 2-point DFT.** That's not a metaphor — it's literally the same linear algebra. Everything in Part III generalizes this to a $d$-state cyclic shift, whose eigenvectors are exactly the length-$d$ discrete Fourier basis, with eigenvalues the $d$-th roots of unity. If you know DFT of a circulant matrix, you already know the hardest math in this document. We just haven't attached the physics vocabulary yet.

## 5. Complex exponentials and roots of unity (so "cis" isn't scary)

Euler's formula: $e^{i\theta} = \cos\theta + i\sin\theta$. Physicists/engineers often abbreviate this $\operatorname{cis}(\theta) := e^{i\theta}$.

The **$d$-th roots of unity** are the $d$ complex numbers $\omega_k = e^{2\pi i k/d}$ for $k = 0, 1, \dots, d-1$ — they're the $d$ equally-spaced points on the unit circle, and they are *by construction* the eigenvalues of the "shift by one" permutation matrix on $d$ states (the $d$-state generalization of our 2-state swap). This is not a coincidence tacked onto the theory — it is a direct consequence of representation theory for the cyclic group $\mathbb{Z}/d\mathbb{Z}$, which every periodic Markov chain literally carries around inside it.

**Check for $d=2$:** $\omega_0 = e^0 = 1$, $\omega_1 = e^{i\pi} = -1$. Matches the swap-matrix eigenvalues above exactly. ✓

## 6. Classifying Markov chain long-run behavior

A finite Markov chain's states split into:
- **Transient states** — visited finitely often, eventually abandoned forever.
- **Recurrent classes** (a.k.a. **absorbing sets/invariant sets**, denoted $\rho$) — once you enter one, you never leave it, and you return to every state in it infinitely often.

Within a recurrent class, if the class further splits into **cyclic sub-classes** — you must visit them in a fixed rotating order, $1 \to 2 \to \cdots \to d_\rho \to 1 \to \cdots$ — the class has **period $d_\rho$**. Label these sub-classes with an index $\delta = 1, \dots, d_\rho$ (I'll call these **asymptotic events**, following Hoffman's terminology). Being in event $\delta$ this step guarantees being in event $\delta + 1 \pmod {d_\rho}$ next step, with certainty.

**Indicator function**: $U_{\rho,\delta}(e) = 1$ if $e$ belongs to asymptotic event $\delta$ of class $\rho$, else $0$.

**Key structural fact**, which is just restating "you must move from event $\delta$ to event $\delta+1$":
$$L\, U_{\rho,\delta} = U_{\rho,\delta - 1} \tag{F1}$$
(Check: $(LU_{\rho,\delta})(e) = \Pr[\text{next state in event } \delta \mid e]$. This is $1$ exactly when $e$'s *current* event is $\delta - 1$, since $\delta - 1 \to \delta$ is the forced transition. So $LU_{\rho,\delta} = U_{\rho,\delta-1}$.) This one identity is the engine for everything that follows — bookmark it.

## 7. Adding a clock: the "space-time chain"

$L$ alone has no memory of elapsed time — it only knows "current state → next state." To talk about waves as functions of *both* place and time, extend the state to include a step-counter $n \in \mathbb{N}$. Define a new chain $Q$ on the bigger space $E \times \mathbb{N}$:

$$Q\big((e, n),\ (\cdot, n+1)\big) = L(e, \cdot)$$

i.e., $Q$ moves the clock forward by exactly 1 every step, while the state moves according to $L$ exactly as before. It's bookkeeping, nothing more: $Q$ just staples a clock onto $L$.

A function $g(e, n)$ (writing $g_n := g(\cdot, n)$ for the "slice" at time $n$) is **$Q$-harmonic** if $Qg = g$. Unwinding the definition:

$$L\, g_{n+1} = g_n \tag{F2}$$

**In words: apply the one-step operator to tomorrow's function and you get today's function.** This is the equation that felt like it came from nowhere last time — but notice it's just $Lh = h$ (Section 3) applied separately at each time slice, glued together by a shift in the time index. Nothing more exotic is happening.

**Tiny worked check**, still using our 2-state swap $L$. Try $g_n = (-1)^n \cdot(1,-1)$ — i.e. $g_0 = (1,-1)$, $g_1=(-1,1)$, $g_2=(1,-1),\dots$ Check (F2): $L g_1 = L(-1,1) = (h(B),h(A))$ where $h=(-1,1)$, giving $(1,-1) = g_0$. ✓ It works, and notice what it *means*: this function isn't just an abstract eigenfunction anymore — it's a genuine time-varying oscillation, flipping sign every tick, defined jointly over state and time. **That flip-every-tick behavior is the "vibration" the whole theory is named after.**

## 8. The free-particle wavefunction (quick physics refresher)

A quantum free particle's plane-wave state, in the position basis, is
$$\psi(x,t) = A\sum_x \operatorname{cis}\!\left(2\pi \frac{x}{\lambda} - 2\pi\frac{t}{T}\right)|x\rangle$$
with wavelength $\lambda$, period $T$, momentum $p = h/\lambda$, energy $E = hc/T$ ($h$ = Planck's constant). This is the target we're aiming at: something with exactly this algebraic shape, built purely out of Markov-chain machinery.

## 9. A little measure theory (just enough, no more)

Hoffman's formal definition uses *measurable spaces* rather than plain finite sets, so that the theory also covers continuous/infinite experience-spaces. A **measurable space** $(X, \mathcal{X})$ is a set $X$ together with a collection $\mathcal{X}$ of "allowed events" (subsets of $X$) that's closed under complement and countable union — a **$\sigma$-algebra**. All this buys you is the ability to assign probabilities consistently even when $X$ is infinite (e.g., the real line). For every finite example in this document, you can safely read $\mathcal{X}$ as "all subsets" and ignore it. A **Markovian kernel** $K: W \times \mathcal{X} \to [0,1]$ is the measure-theoretic generalization of a stochastic matrix: for each $w \in W$, $K(w, \cdot)$ is a probability measure on $X$. In finite examples, kernel = matrix, full stop.

That's the entire toolkit. Everything below is built from these nine ingredients.

---

# PART II — THE THEORY: WHAT IS A CONSCIOUS AGENT?

## 10. The motivating claim (compressed)

Hoffman's argument, briefly (see [Objects of Consciousness, 2014] and [The Origin of Time in Conscious Agents, 2014] for the full case):

1. **Evolutionary games and genetic algorithms** show that natural selection generically drives *veridical* (truth-tracking) perception to extinction when it competes against perception tuned purely to fitness payoffs — because fitness functions are, generically, not monotonic transformations of objective world-structure. (This is a real, published result from simulation studies, not a hand-wave — see Mark, Marion & Hoffman 2010.)
2. So perception is **useful but not true** — an interface, like desktop icons, not a window onto reality. Space, time, and objects are the "desktop"; they are *not* what's "really there," any more than a file's icon is blue because the file itself is blue.
3. Separately, **theoretical physics** (Hoffman quotes Nima Arkani-Hamed, David Gross, Ed Witten, and others) holds that spacetime itself is not fundamental — it has no operational meaning below the Planck scale, and several current research programs are actively trying to derive it from something deeper.
4. If neither evolution nor physics can tell you what's *underneath* the interface, you need an independent proposal for what's fundamental. Hoffman's proposal: **consciousness** — formalized as networks of "conscious agents" — and the project is to show that spacetime, particles, and (eventually) forces emerge as a convenient *data structure* for representing conscious-agent dynamics, rather than being fundamental themselves.

I'm compressing a lot of philosophy here on purpose — the interesting content, and the actual content of your original question, is entirely in what follows.

## 11. Definition: a conscious agent

> **Definition.** A conscious agent is a six-tuple
> $$C = \big((X,\mathcal X),\ (G,\mathcal G),\ (W,\mathcal W),\ P,\ D,\ A,\ N\big)$$
> where $(X,\mathcal X)$, $(G,\mathcal G)$, $(W,\mathcal W)$ are measurable spaces, and
> $$P: W\times \mathcal X \to [0,1], \quad D: X\times\mathcal G\to[0,1], \quad A: G\times \mathcal W\to[0,1]$$
> are Markovian kernels, and $N$ is an integer counter.

In plain language:
- $X$ = the space of possible **experiences** (qualia) the agent can have.
- $G$ = the space of possible **actions** it can take.
- $W$ = "the world" — under **conscious realism** (Hoffman's core hypothesis), $W$ is *itself* composed entirely of other conscious agents. There is no separate physical substrate underneath.
- $P$ = **perception kernel**: given the world's state, a probability distribution over the agent's next experience.
- $D$ = **decision kernel**: given an experience, a probability distribution over the agent's next action. (Hoffman explicitly interprets this probability as *objective* indeterminism — his stand-in for free will.)
- $A$ = **action kernel**: given an action, a probability distribution over how the world changes.
- $N$ = a step counter, incremented once per full perceive→decide→act cycle.

This is deliberately modeled on Turing's minimal formalism for computation (six components, simple rules, then a "thesis" claiming universal scope) — Hoffman states the analogy explicitly. The **conscious-agent thesis** is the claimed analogue of the Church–Turing thesis: *every property of consciousness can be represented as a property of some (network of) conscious agent(s).* Like Church–Turing, it's unprovable in principle but falsifiable in practice (find a conscious phenomenon no agent-network can represent, and the thesis is dead).

## 12. Worked example: two agents, joined

Take two agents $C_1, C_2$, each with $X_i, G_i = \{0,1\}$ (a "bit" of experience, a "bit" of action). **Undirected join**: $C_1$'s action feeds $C_2$'s perception, and vice versa — $A_1 = P_2$, $A_2 = P_1$, and their counters synchronize, $N_1 = N_2$.

The joint state is $(x_1, g_1, x_2, g_2) \in \{0,1\}^4$ — **16 states**, written $|0000\rangle$ through $|1111\rangle$. At each tick, four things happen at once: $C_1$ perceives, decides (via $D_1$), and acts (via $A_1$); simultaneously $C_2$ does the same. This gives one big transition kernel $L$ on the 16-state space (a $16\times16$ stochastic matrix — I won't write it all out, but it's just four small kernels multiplied together coordinate-wise, exactly as in Section 2).

**If all four component kernels ($D_1, A_1, D_2, A_2$, thought of as $2\times2$ identity matrices) are identity matrices**, direct computation of $L$'s recurrent structure gives **six absorbing sets**:

| Absorbing set $\rho$ | States | Period $d_\rho$ |
|---|---|---|
| 1 | $\{\lvert0000\rangle\}$ | 1 |
| 2 | $\{\lvert1111\rangle\}$ | 1 |
| 3 | $\{\lvert0101\rangle, \lvert1010\rangle\}$ | 2 |
| 4 | $\{\lvert0001\rangle,\lvert1000\rangle,\lvert0100\rangle,\lvert0010\rangle\}$ | 4 |
| 5 | $\{\lvert0011\rangle,\lvert1001\rangle,\lvert1100\rangle,\lvert0110\rangle\}$ | 4 |
| 6 | $\{\lvert0111\rangle,\lvert1011\rangle,\lvert1101\rangle,\lvert1110\rangle\}$ | 4 |

Change just **one** of the four kernels — say $D_1$ from identity to the swap $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ — and the *entire* asymptotic structure reorganizes into just **two** absorbing sets, each of period 8. One matrix entry flipped, and the long-run classification of the whole 16-state system rewired itself completely.

🟢 **SOLID.** This is ordinary, checkable finite-Markov-chain theory (see Revuz, *Markov Chains*, 1984) — the novelty is entirely in *interpreting* the state space as "joint experience-and-action space of two agents," not in the mathematics of decomposition itself.

## 13. The combination problem, and two theorems

Philosophers (William James, 1890; more recently Sam Coleman, Philip Goff, William Seager) have long posed the **combination problem**: if consciousness is fundamental and "atomic," how do many small conscious subjects combine into one larger one? James's classic argument: pack 100 individual feelings together as tightly as you like — "still each remains the same feeling it always was, shut in its own skin, windowless" — there is no obvious 101st, unified feeling. Most panpsychist theories have no rigorous answer to this. Hoffman & Prakash claim two **constructive proofs**:

> **Theorem 1 (Undirected Join).** Given $C_1, C_2$ with an undirected join, define $C = (X_1{\times}X_2,\ G_1{\times}G_2,\ P_1{\otimes}P_2,\ D_1{\otimes}D_2,\ A_1{\otimes}A_2,\ N_1)$ (tensor products of the kernels — i.e. product probabilities, since the two agents' perceptual/action channels are initially independent). Then $C$ satisfies the definition of a conscious agent.

> **Theorem 2 (Directed Join).** Given a directed join $C_1 \to C_2$, define $C = (X_1,\ G_2,\ P_1,\ D_1 A_1 D_2,\ A_2,\ N_1)$ — note the decision kernel is now a **kernel composition** $D_1 A_1 D_2$ (chain the three matrices together), integrating over all of $C_1$'s intermediate action space. Then $C$ satisfies the definition of a conscious agent.

Both proofs are "by construction" — you just check the resulting tuple satisfies Definition in §11, which is a few lines of bookkeeping. 🟢 **SOLID** as math. What it buys philosophically: two agents' identities are *not destroyed* by combination (they're still visible in the tensor/composition structure), yet the combined agent has **new** properties — e.g., in the numeric example of §12, the combined agent's asymptotic period-8 cycles are not present in either constituent alone, and the degree of "new-ness" can be quantified using Tononi's integrated-information measure ($\Phi$ = 2 bits, in that specific numeric case) 🟢. Whether this actually *dissolves* James's problem, rather than reformulating it, is a live philosophical dispute — see the objections/replies discussion in §21.

## 14. The qualia kernel: chaining perceive→decide→act into one loop

Compose the three kernels of a single agent into one operator on experience-space alone:
$$Q := D\, A\, P : X \times \mathcal X \to [0,1]$$
(matrix multiplication, in the finite case.) $Q$ answers: "given my current experience, what's the probability distribution of my *next* experience, after one full perceive-decide-act loop?" This is the object whose **long-run/asymptotic behavior** is where all the physics lives — and it's exactly an $L$-type stochastic matrix from Part I, so everything in Sections 3–7 applies to it directly.

---

# PART III — THE BRIDGE TO PHYSICS: FROM MARKOV CHAINS TO WAVEFUNCTIONS

We now do, very slowly, the derivation that felt rushed before. Every step will have a numeric check.

## 15. Setting up the running example

Take the qualia kernel $Q$ (renaming it $L$ from here to match Part I's notation, since it's just an ordinary stochastic matrix once you have it) restricted to absorbing set $\rho = 3$ from §12: $\{\lvert0101\rangle, \lvert1010\rangle\}$, period $d_3 = 2$. Restricted to just these two states, the dynamics *is* the swap matrix from Section 3–4:
$$L\Big|_\rho = \begin{pmatrix}0&1\\1&0\end{pmatrix}, \qquad U_{3,1} = \mathbb 1_{\lvert0101\rangle},\quad U_{3,2}=\mathbb 1_{\lvert1010\rangle}$$

We already verified (F1) for this exact matrix in Section 6. Good — nothing new to check, we're just about to build on top of it.

## 16. Eigenvalues, explicitly

$$\lambda_{\rho,k} = \exp(2\pi i k/d_\rho), \qquad k = 0, \dots, d_\rho - 1$$

For $\rho=3$: $\lambda_{3,0}=1$, $\lambda_{3,1}=-1$ — the same two roots of unity as Section 5, because $d_3 = 2$.

## 17. Building the eigenfunction $f_{\rho,k}$, and proving it works

$$f_{\rho,k} := \sum_{\delta=1}^{d_\rho} \lambda_{\rho,k}^{\ \delta}\, U_{\rho,\delta} \tag{F3}$$

**Claim:** $L f_{\rho,k} = \lambda_{\rho,k}\, f_{\rho,k}$.

**Proof**, using (F1) term by term:
$$Lf_{\rho,k} = \sum_\delta \lambda_{\rho,k}^{\ \delta}\,(LU_{\rho,\delta}) \stackrel{(F1)}{=} \sum_\delta \lambda_{\rho,k}^{\ \delta}\, U_{\rho,\delta - 1} = \sum_{\delta'} \lambda_{\rho,k}^{\ \delta'+1}\,U_{\rho,\delta'} = \lambda_{\rho,k}\, f_{\rho,k}\ \blacksquare$$
(re-indexing $\delta' = \delta - 1$ in the third step). This is a two-line induction, not an assumption.

**Numeric check** ($\rho=3, k=1$, so $\lambda=-1$): $f_{3,1} = (-1)^1 U_1 + (-1)^2 U_2 = -U_1 + U_2 = (-1,1)$ as a vector. Apply $L$: $Lf = (f(\lvert1010\rangle), f(\lvert0101\rangle)) = (1,-1)$. And $\lambda_{3,1} f_{3,1} = (-1)(-1,1) = (1,-1)$. **Match.** ✓ (Compare: this is literally the eigenvector $(1,-1)$ we found by inspection in Section 4 — same object, now built systematically instead of guessed.)

## 18. Making it a genuine wave over time: $Q$-harmonic functions

Build the space-time chain (§7) from $L\vert_\rho$, and define
$$g_{\rho,k}(\cdot, n) := \lambda_{\rho,k}^{\,-n}\, f_{\rho,k} \tag{F4}$$

**Claim:** this is $Q$-harmonic, i.e. satisfies (F2): $L g_{n+1} = g_n$.
**Proof:** $L g_{n+1} = L(\lambda^{-(n+1)}f) = \lambda^{-(n+1)}(Lf) = \lambda^{-(n+1)}\cdot \lambda f = \lambda^{-n} f = g_n$. $\blacksquare$

**Numeric check**: $\lambda_{3,1}^{-n} = (-1)^{-n} = (-1)^n$, so $g_0 = (-1,1)$, $g_1=(1,-1)$, $g_2=(-1,1),\dots$ — this is exactly the flip-every-tick oscillation from Section 7. We've now derived it from the general formula (F4) instead of guessing it, and confirmed it's the same object.

## 19. Expanding into the "wave" form

Substitute the definition of $\lambda_{\rho,k}$ (§16) into (F3)–(F4):
$$g_{\rho,k}(\delta, n) = \lambda_{\rho,k}^{\ \delta - n} = \exp\!\Big(2\pi i k\,\frac{\delta-n}{d_\rho}\Big)$$
Define $d_{\rho,k} := d_\rho/k$ (a rescaled period). Then:
$$\boxed{g_{\rho,k}(\delta,n) = \operatorname{cis}\!\left(2\pi\frac{\delta}{d_{\rho,k}} - 2\pi\frac{n}{d_{\rho,k}}\right)} \tag{F5}$$

**Check against §18's numbers:** $\rho=3,k=1 \Rightarrow d_{3,1}=2/1=2$. At $\delta=1,n=0$: $\operatorname{cis}(2\pi\cdot\tfrac12 - 0)=\operatorname{cis}(\pi) = -1$ — matches the coefficient of $U_1$ in $g_0=(-1,1)$. ✓ Every step here is exact arithmetic, not approximation.

## 20. The dictionary to physics

Place (F5) next to the free-particle wavefunction from §8:

| Physics | Conscious-agent dynamics |
|---|---|
| Position $x$ | asymptotic-event index $\delta$ |
| Basis ket $\lvert x\rangle$ | Indicator function $U_{\rho,\delta}$ |
| Time $t$ | Step counter $n$ |
| Wavelength $\lambda_{\text{wave}}$, Period $T$ | $d_{\rho,k}$ (plays both roles — "wave speed" is 1 in these units) |
| Momentum $p = h/\lambda$ | $p = h/d_{\rho,k}$ |
| Energy $E=hc/T$ | $E = hc/d_{\rho,k}$ |

🟢 **SOLID, but narrow.** This is a genuine, term-by-term algebraic match: any finite Markov chain's long-run periodic behavior *automatically* has the mathematical shape of a free-particle plane wave, with an explicit dictionary. This is real and checkable — you just did it. It is **not** yet: the Schrödinger equation's dynamics (only the asymptotic/steady shape is matched, not the transient evolution), interactions between particles, gauge symmetry, or anything resembling the electromagnetic, weak, strong, or gravitational forces. It is a kinematic analogy for one free particle, derived from combinatorics of periodicity — a genuinely nice result, but several very large steps short of "unifying physics."

## 21. A quick word on objections

Hoffman and Prakash publish reader objections alongside their papers, which is worth knowing about if you want to argue with this seriously. Two relevant ones, paraphrased:

- *"Your formalism could equally describe unconscious agents — so it says nothing about consciousness specifically."* Their reply: a formalism applying to multiple domains doesn't disqualify it from any one of them (they compare this to $SU(3)$ modeling both quark color and — approximately — flavor symmetry). Critics find this reply weak, precisely because *nothing in the mathematics itself distinguishes conscious from unconscious dynamics* — the word "conscious" is an interpretive label attached from outside, not a property the theorems derive.
- *"The undirected join's decision kernel starts as a bare product ($D_1 \otimes D_2$) — that's just two separate agents deciding separately, not a real combination."* Reply: as the joined system evolves, later iterates of the combined decision kernel are no longer expressible as a product — genuine correlation builds up asymptotically. This is true as stated, but whether *correlation* is the same thing as *phenomenal unity* (the thing James's puzzle was actually about) is exactly the philosophical crux critics push back on.

I raise these not to relitigate the philosophy, but because you should know the mathematical claims (joins exist, are constructive, produce measurable new correlational structure) are on much firmer ground than the interpretive claims (this *is* what combining consciousnesses *means*).

## 22. Time and space "from" consciousness (conceptual layer)

Before the heavier 2023–2026 material, one elegant piece from [The Origin of Time in Conscious Agents, 2014] worth having, because it's the conceptual seed for everything in Part IV:

Each agent's counter $N$ gives it a **subjective, totally-ordered sequence** of experiences — a private "before/after," with no reference to any ambient universal clock. When two agents are joined (one's action triggers the other's perception), you can define a **simultaneity correspondence** between their respective counters, even though $N_1$ need not equal $N_2$ in general. Propagating these pairwise correspondences across an entire network of joined agents is proposed as the origin of a shared, approximate notion of "time" — with the open technical question being exactly which network topologies allow this to bootstrap into something resembling a single global time order 🔴.

The parallel relativity sketch: the six real quantities describing a joined pair ($N_1,N_2,X_1,G_1,X_2,G_2$) are proposed as generators of the geometric algebra $\mathcal G(2,4)$ — the conformal algebra for Minkowski space (signature $1,3$), whose rotor group is isomorphic to $SU(2,2)$, linking to Penrose's twistor program. 🟡 **SKETCH**: this is a real, named algebraic structure with the right dimension-count, explicitly offered by the authors as "a promising direction to explore" — not a derivation. No metric, no field equations, no curvature are produced by this step; it identifies a *candidate scaffold*, nothing more.

---

# PART IV — THE FRONTIER (2022–2026): TOWARD THE FORCES

## 23. Why "spacetime is doomed" matters here (a physics primer you need first)

Hoffman leans heavily on a specific, real research trend in high-energy theoretical physics, associated especially with Nima Arkani-Hamed: the discovery that scattering amplitudes (the numbers that predict what happens when particles collide) can sometimes be computed from purely *geometric/combinatorial* objects — the **amplituhedron**, **cosmological polytopes**, and related "**positive geometries**" — **without referencing spacetime, locality, or unitarity at all** as starting assumptions. Ordinary Feynman-diagram calculations (assuming spacetime + locality + unitarity from the outset) can require hundreds of pages of algebra for processes these geometric methods compute in a couple of terms. The physical content of these geometric objects — the actual data needed to reconstruct a scattering amplitude — turns out to be captured by combinatorial objects called **decorated permutations** (permutations of $2n$ objects, decorated with extra labels like particle helicities, or masses and spins in non-supersymmetric cases).

This matters because it hands Hoffman a possible target: if scattering amplitudes reduce to permutation combinatorics, and if conscious-agent dynamics *also* naturally generates permutation-like combinatorial structures, maybe they're two views of the same underlying object.

## 24. Fusions of Consciousness (Hoffman, Prakash & Prentner, *Entropy*, 2023)

**The Markov polytope $\mathcal M_n$.** The set of *all* possible Markov transition matrices on $n$ states is itself a geometric object: each row is a probability distribution (a point on a simplex), so the space of all $n\times n$ stochastic matrices is a product of $n$ copies of the $(n{-}1)$-simplex — a polytope of dimension $n(n-1)$ with $n^n$ vertices (each vertex is a *deterministic* function $\{1,\dots,n\}\to\{1,\dots,n\}$). 🟢 This is straightforward, checkable polytope geometry.

**Worked micro-example, $n=2$:** $\mathcal M_2$ = all $2\times2$ stochastic matrices $\begin{pmatrix}1-x & x\\ y & 1-y\end{pmatrix}$, parameterized by $(x,y)\in[0,1]^2$ — literally **the unit square**, dimension $2 = n(n-1)$, with $n^n = 4$ vertices (the four deterministic $2\times2$ stochastic matrices: identity, swap, and the two "collapse to one state" maps). You can draw this polytope on paper in ten seconds; every point in it is a full Markov chain, and the swap matrix from Part I sits at one specific corner of it.

**The fusion simplex $\mathcal F_n$.** Separately, the paper defines how $n$ agents (or $n$ qualia) can be combined not by *joining* (Theorem 1/2 above, which keeps both identities distinct) but by **fusing** into something with fewer effective degrees of freedom — a controlled form of "merging" formalized as living on an $(n-1)$-dimensional simplex.

**The map to decorated permutations.** The genuinely new contribution: a formal map sending points of the Markov polytope to decorated permutations — the same objects §23 says encode scattering-amplitude data. The claim is a structural conjecture, not (yet) a full derivation: *spacetime and its scattering processes are a data structure that codes for the combinatorics of interacting conscious agents; a particle-in-spacetime is a projection of a communicating class of conscious agents.*

🟡 **SKETCH / open conjecture.** This is a real, novel mathematical map — not empty — but it stops well short of deriving the Standard Model's actual gauge group $SU(3)\times SU(2)\times U(1)$, particle content, masses, or coupling constants. It shows the two mathematical universes (Markov combinatorics; scattering-amplitude combinatorics) have objects of *matching type*. It does not show one produces the other.

## 25. Recursive trace logic (2025–2026, unpublished/in-progress)

This is the newest layer, and — as of the most recent public discussion available (a recorded working conversation between Hoffman, Prakash, Chris Fields, and Robert Chis-Ciure, hosted by Michael Levin's lab, April 2026) — explicitly described by Hoffman as "only two months old" at time of recording, i.e. still being actively developed.

**The trace of a Markov chain.** Take a big chain on state space $E$, and an observer who can only see a subset $A\subset E$ (the rest, $E\setminus A$, is "dark" to it). Split the transition matrix into four blocks:
$$L = \begin{pmatrix} \text{visible}\to\text{visible} & \text{visible}\to\text{dark} \\ \text{dark}\to\text{visible} & \text{dark}\to\text{dark}\end{pmatrix} = \begin{pmatrix} P_{AA} & P_{AD} \\ P_{DA} & P_{DD}\end{pmatrix}$$
The **trace** of $L$ onto $A$ — the effective transition matrix the limited observer actually experiences — is given by the standard Markov-chain formula (this part is decades-old theory, not new):
$$\operatorname{Tr}_A(L) = P_{AA} + P_{AD}\,(I - P_{DD})^{-1}\, P_{DA}$$
Read the second term as "every possible excursion into the dark region and back": $(I-P_{DD})^{-1} = \sum_{k=0}^\infty P_{DD}^{\,k}$ sums over all path-lengths through the invisible states, and pre/post-multiplying by the exit/entrance blocks $P_{AD}, P_{DA}$ stitches the excursion back onto the visible states. 🟢 This formula itself is standard (Revuz-style Markov chain reduction) — the trace of a Markov chain onto a sub-state-space is again a valid Markov chain.

**The new discovery** (per Hoffman, within the last few months as of the April 2026 recording): the trace relation defines a **partial order** on the set of *all* Markov chains — $M \leq N$ iff $M$ is a trace of $N$ — and this partial order forms a genuine **non-Boolean logic** (no global top element, no global negation, not all pairs have meets/joins) with the property that for any *fixed* chain $P$, the set of *all its traces* forms a well-behaved **Boolean sub-logic** with $2^n$ elements (for $n$ underlying experiences). Hoffman calls this "the multiscale logic of minimal surprise," because the trace is provably the *zero-surprise* coarse-grained view of the bigger chain (its stationary measure is exactly the normalized restriction of the bigger chain's stationary measure — no information mismatch is introduced by coarse-graining).

**Agency, recursively.** The newest move: model "changing what you attend to" (agency) as *itself* a Markov chain — but now on the space of possible observer-windows (i.e., on the trace logic itself), rather than on raw states. A "policy" is a Markov kernel over trace-logic elements; since policies are themselves Markov objects, they have their *own* trace logic, on which you can define meta-policies, and so on — an open-ended recursive hierarchy ("recursive trace logic").

**The relativity attempt.** Standard "enhanced Markov chains" (§7's space-time chain, generalized) attach a counter that increments once per experience-change; a sub-observer (lower in the trace order) has its counter tick *more slowly* than a full observer, because it registers fewer distinguishable experiences per unit of the bigger chain's dynamics. Hoffman's live conjecture: this counter-rate relationship between nested trace-observers **is** (or directly produces) the time-dilation of special/general relativity — with distances constructed from **commute-time** quantities (expected round-trip time between two states), which have a known correspondence to squared Euclidean distance in the Markov-chain literature.

🔴 **ASPIRATION, explicitly.** In his own words in the same recorded discussion, this program has *not yet* solved even the full agency framework; a general closed-form formula for the "join" operation in the trace logic (needed to combine two coarse-grained views back into one) is an **open mathematical problem** with no known general solution; and deriving actual general relativity is described as "what I'm working on quite heavily" — future tense, not a completed result. Take this whole section as "here is the shape of the current research program," not "here is a result."

---

# PART V — HONEST SCORECARD

| Claim | Status | Where |
|---|---|---|
| A conscious agent is a well-defined mathematical object (6-tuple of measurable spaces + 3 Markov kernels + counter) | 🟢 Solid definition | Objects of Consciousness, 2014 |
| Joining/combining agents is a constructive, provable operation | 🟢 Solid (Thm 1 & 2) | Objects of Consciousness, 2014 |
| Asymptotic dynamics of a Markov chain has the algebraic form of a free-particle wavefunction | 🟢 Solid, narrow scope | Objects of Consciousness §8 |
| This extends to interactions, gauge fields, or any specific force | 🔴 Not attempted at this stage | — |
| Two joined agents' state components form a Minkowski-space conformal algebra $\mathcal G(2,4)$ | 🟡 Suggestive dimension count, not derived | Origin of Time, 2014 |
| Markov-chain combinatorics maps onto scattering-amplitude combinatorics (decorated permutations) | 🟡 A real, novel map; conjectural physical meaning | Fusions of Consciousness, 2023 |
| The map derives the Standard Model's gauge group or force content | 🔴 Not done | — |
| Trace of a Markov chain is a well-defined Markov chain, forming a non-Boolean logic | 🟢 Solid (trace formula is classical; the partial-order/logic observation is the new part, internally consistent) | Recursive trace logic, 2025-26 (unpublished) |
| Recursive trace logic derives special/general relativity | 🔴 Explicit open research goal, not accomplished | same, per authors' own framing |

**My own honest read, since you asked me to bring taste and not just entropy:** the *strongest* piece of this whole edifice is Part III — the wavefunction match is genuinely elegant, checkable in an afternoon, and not something I'd call hype. Everything past that point is a *research program with promising early combinatorial coincidences*, not a unification. The recurring pattern across 2014 → 2023 → 2026 is the same move at increasing sophistication: find a real mathematical structure inside Markov-chain theory (asymptotic eigenfunctions → polytopes/permutations → trace logics) that has the *right shape* to match something in fundamental physics, and treat the shape-match as evidence for the ontological claim. That's a legitimate way to do exploratory theoretical physics — plenty of real physics has started this way — but "the same shape keeps appearing" is meaningfully weaker evidence than "we derived the coupling constants," and the authors themselves are candid, in their more technical venues, about exactly how much remains open. The "three kernels are enough" framing in your original question is best understood not as a discovered sufficiency theorem, but as the *minimal* structure needed to define a closed perceive-decide-act loop at all — everything downstream is a bet that this minimal loop, iterated and combined at scale, is a rich enough generative object to reconstruct physics. That bet is unresolved.

---

# PART VI — REFERENCES

- Hoffman, D.D. & Prakash, C. (2014). *Objects of Consciousness*. Frontiers in Psychology, 5:577.
- Hoffman, D.D. (2014). *The Origin of Time in Conscious Agents*. Cosmology, 18, 494–520.
- Fields, C., Hoffman, D.D., Prakash, C., Singh, M. (2018). *Conscious agent networks: Formal analysis and application to cognition*. Cognitive Systems Research.
- Hoffman, D.D., Prakash, C., Prentner, R. (2023). *Fusions of Consciousness*. Entropy, 25(1), 129.
- Hoffman, D. & Prakash, C. (2025–26, in progress / unpublished manuscript referenced in talks). *Recursive trace logic and a multiscale logic of collective intelligence* — presented in conversation with M. Levin, C. Fields, R. Chis-Ciure (April 2026).
- Mark, J.T., Marion, B.B., Hoffman, D.D. (2010). *Natural selection and veridical perceptions*. Journal of Theoretical Biology, 266, 504–515.
- Revuz, D. (1984). *Markov Chains*. North-Holland. (Standard reference for trace/reduction formulas and asymptotic periodicity theorems used throughout Part III–IV.)
- Arkani-Hamed, N. et al. — background on the amplituhedron / positive geometries program referenced in Part IV, §23.

*Document compiled from primary sources; equations re-derived and re-notated for pedagogical flow rather than copied verbatim from the originals.*
