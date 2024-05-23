// Color definitions for visual progress indicators
const progColor = {
	teal: '#78D0DE',
    green: '#99C66D',
    purple: '#AE80B1',
    blue: '#6A9BE7',
    red: 'rgb(250 250 250 / 0%)'  // Add more sections as needed (flash needs to be transparent)
    // flash color set in position.css - /*flash color*/
};


// true = Hard forks - uses color(s)
// false = TTD & extra protocol - uses dark shading
const statusList = [
    // Merge
    ["mergeA", true, { green: 100, purple: 0, blue: 0, red: 0 }], // Beacon chain launch
    ["mergeB", true, { green: 100, purple: 0, blue: 0, red: 0 }], // Warmup fork (Altair)
    ["mergeC", true, { green: 100, purple: 0, blue: 0, red: 0 }],  // Merge! No more PoW
    ["mergeD", true, { green: 0, purple: 100, blue: 0, red: 0 }], // Withdrawals
    ["mergeE", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }], // Distributed validators
    ["mergeF", false, 60],   									  // Secret leader election
    ["mergeG", false, 50],   									 // Per-slot participant selection
    ["mergeH", false, 50],   									  // SSF specification
    ["mergeI", true, { green: 0, purple: 0, blue: 0, red: 0 }], // Implmentation
    ["mergeJ", false, 20],                                        // Single slot finality (SSF)
    ["mergeK", true, { green: 0, purple: 0, blue: 10, red: 40 }],  // Increase validator count
    ["mergeL", false, 20],                                        // Ideal quantum-safe signatures
    // Surge
    ["surgeA", true, { teal: 66.66, green: 0, purple: 0, blue: 0, red: 0 }], // Optimistic rollup fraud provers
    ["surgeB", true, { teal: 66.66, green: 0, purple: 0, blue: 0, red: 0 }], // ZK-EVMs
    ["surgeC", true, { green: 0, purple: 0, blue: 100, red: 0 }], // EIP-4844 specification
    ["surgeD", true, { green: 0, purple: 0, blue: 100, red: 0 }],  // EIP-4844 implementation
    ["surgeE", true, { green: 0, purple: 0, blue: 100, red: 0 }],  // Basic rollup scaling
    ["surgeF", false, 50],                                        // peerDAS
    ["surgeG", false, 20],                                        // Efficient DA self-healing
    ["surgeH", false, 50],                                        // Full rollup scaling
    ["surgeI", true, { teal: 30, green: 0, purple: 0, blue: 0, red: 0 }], // Improve cross-rollup standards + interop
    ["surgeJ", false, 20],                                        // Q-sale, no-setup commitments
    // Scourge
    ["scourgeA", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }],   // Extra-protocol MEV markets
    ["scourgeB", false, 50],                                        // Explore ePBS
    ["scourgeC", false, 80],                                        // Inclusion lists
    ["scourgeD", false, 20],                                        // Explore MEV burn in ePBS
    ["scourgeE", false, 20],                                        // Distributed block building
    ["scourgeF", false, 20],                                        // Exsplore execution tickets
    ["scourgeG", false, 50],                                        // Endgame block production <br>pipeline
    ["scourgeH", true, { teal: 20, green: 0, purple: 0, blue: 0, red: 0 }],   // App-layer MEV minimzation
    ["scourgeI", false, 20],                                        // Explore preconfimations
    ["scourgeJ", true, { green: 0, purple: 0, blue: 0, red: 100 }],  // Raise max effective balance
    ["scourgeK", true, { teal: 0, green: 0, purple: 10, blue: 10, red: 25 }],  // Improve node operator usability
    ["scourgeL", false, 20],                                        // Explore total stake capping
    ["scourgeM", true, { teal: 20, green: 0, purple: 0, blue: 20, red: 20 }],  // Explore solutions to liquid staking centralization
    // Verge
    ["vergeA", true, { green: 100, purple: 0, blue: 0, red: 0 }], // Most serious EVM DoS issues solved
    ["vergeB", true, { green: 100, purple: 0, blue: 0, red: 0 }], // Basic light client support (sync <br>committees)
    ["vergeC", false, 80],                                        // SNARK based light clients
    ["vergeD", true, { green: 0, purple: 0, blue: 0, red: 0 }],   // SNARK for consensus state transition
    ["vergeE", false, 80],                                         // Verkle tree spec + impl
    ["vergeF", false, 50],                                        // Code chunking + gas cost updates
    ["vergeG", false, 80],                                        // Transition spec+ impl
    ["vergeH", false, 50],                                        // Verkle trees
    ["vergeI", true, { green: 0, purple: 0, blue: 0, red: 0 }],   // SNARK for Verkle proofs
    ["vergeJ", true, { green: 0, purple: 0, blue: 0, red: 0 }],   // SNARK for L1 EVM
    ["vergeK", true, { green: 0, purple: 0, blue: 0, red: 0 }],   // Explore EVM verification precompile
    ["vergeL", false, 10],                                        // Fully SNARKed Ethereum
    ["vergeM", false, 10],                                        // Quantum-safe SNARKs (eg. <br>STARKs)
    ["vergeN", false, 20],                                         // SNARK / STARK ASICs
    // Purge
    ["purgeA", true, { green: 100, purple: 0, blue: 0, red: 0 }], // Eliminate most gas refunds
    ["purgeB", false, 100],                                       // EIP-4444 specification
    ["purgeC", false, 20],                                       // EIP-4444 implementation
    ["purgeD", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }], // Beacon chain fast sync
    ["purgeE", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }],  // P2P history (eg. Portal)
    ["purgeF", false, 50],                                        // History expiry (EIP-4444)
    ["purgeG", true, { green: 0, purple: 0, blue: 100, red: 0 }],  // Ban SELF-DESTRUCT
    ["purgeH", false, 20],                                       // Simplify gas mechanics
    ["purgeI", false, 20],                                       // Precompiles EVM impls
    ["purgeJ", false, 30],                                       // Address space extension
    ["purgeK", false, 50],                                       // State expiry
    ["purgeL", false, 20],                                       // LOG reform
    ["purgeM", false, 20],                                       // Remove old tx types
    ["purgeN", false, 20],                                       // Serialization harmonization
    // Splurge
    ["splurgeA", true, { green: 100, purple: 0, blue: 0, red: 0 }], // EIP-1559
    ["splurgeB", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }], // EIP-4337 specification
    ["splurgeC", true, { teal: 100, green: 0, purple: 0, blue: 0, red: 0 }],  // ERC-4337
    ["splurgeD", true, { green: 0, purple: 0, blue: 0, red: 100 }],  // Voluntary EOA conversion
    ["splurgeE", true, { green: 0, purple: 0, blue: 0, red: 100 }],  // In-protocol enshrining
    ["splurgeF", false, 50],                                        // Endgame account abstraction
    ["splurgeG", false, 90],  										// EOF
    ["splurgeH", false, 75], 										// Big modular arithmetic
    ["splurgeI", true, { green: 20, purple: 0, blue: 20, red: 20 }],  // Further EVM improvements
    ["splurgeJ", false, 50],                                        // Endgame EVM
    ["splurgeK", false, 20],                                        // Endgame EIP-1559
    ["splurgeL", false, 10],                                        // Explore deep crypto (eg. <br>obfuscation)
    ["splurgeM", false, 10],                                        // Explore delay- encrypted
    ["splurgeN", false, 40],                                        // VDFs
];


statusList.forEach(item => {
    const ident = item[0];
    const isHardFork = item[1];
    if (document.getElementById(ident)) {
        if (isHardFork) {
            let progStart = 0;
            let grad = 'linear-gradient(90deg, ';
            Object.entries(item[2]).forEach(([color, value], index, array) => {
                const progEnd = progStart + (value / 2);
                grad += `${progColor[color]} ${progStart}%, ${progColor[color]} ${progEnd}%`;
                progStart = progEnd;
                if (index !== array.length - 1) {
                    grad += ', ';
                }
            });
            grad += `, rgb(89 89 89) ${progStart}%, rgb(89 89 89) 100%)`;
            document.getElementById(ident).style.background = grad;
            document.getElementById(ident).style.backgroundSize = '200%';
            document.getElementById(ident).style.backgroundPosition = '100%';
            document.getElementById(ident).style.transition = "background-position 2s";
            document.getElementById(ident).style.animation = "fadeReds 3s ease infinite";
        } else {
            const progStart = item[2] / 2;
            const grad = `linear-gradient(90deg, #00000069 ${progStart}%, rgb(250 250 250 / 0%) ${progStart}%, rgb(250 250 250 / 0%) 100%)`;
            document.getElementById(ident).style.background = grad;
            document.getElementById(ident).style.backgroundSize = '200%';
            document.getElementById(ident).style.backgroundPosition = '100%';
            document.getElementById(ident).style.transition = "background-position 2s";
            document.getElementById(ident).classList.add("greyOut");
        }
    }
});

setTimeout(() => {
    statusList.forEach(step => {
        const ident = step[0];
        if (document.getElementById(ident)) {
            document.getElementById(step[0]).style.backgroundPosition = '0%'; // Animate at start to slide in
        }
    });
}, 100);