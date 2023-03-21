(function() {var implementors = {
"halo2_gadgets":[["impl&lt;F: PrimeFieldBits, const WINDOW_NUM_BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_gadgets/utilities/decompose_running_sum/struct.RunningSumConfig.html\" title=\"struct halo2_gadgets::utilities::decompose_running_sum::RunningSumConfig\">RunningSumConfig</a>&lt;F, WINDOW_NUM_BITS&gt;"],["impl&lt;Hash, Commit, Fixed&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_gadgets/sinsemilla/merkle/chip/struct.MerkleConfig.html\" title=\"struct halo2_gadgets::sinsemilla::merkle::chip::MerkleConfig\">MerkleConfig</a>&lt;Hash, Commit, Fixed&gt;<span class=\"where fmt-newline\">where\n    Hash: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.HashDomains.html\" title=\"trait halo2_gadgets::sinsemilla::HashDomains\">HashDomains</a>&lt;Affine&gt;,\n    Fixed: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;Affine&gt;,\n    Commit: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.CommitDomains.html\" title=\"trait halo2_gadgets::sinsemilla::CommitDomains\">CommitDomains</a>&lt;Affine, Fixed, Hash&gt;,</span>"],["impl&lt;FixedPoints: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;Affine&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_gadgets/ecc/chip/struct.EccChip.html\" title=\"struct halo2_gadgets::ecc::chip::EccChip\">EccChip</a>&lt;FixedPoints&gt;"],["impl&lt;Hash, Commit, Fixed&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_gadgets/sinsemilla/merkle/chip/struct.MerkleChip.html\" title=\"struct halo2_gadgets::sinsemilla::merkle::chip::MerkleChip\">MerkleChip</a>&lt;Hash, Commit, Fixed&gt;<span class=\"where fmt-newline\">where\n    Hash: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.HashDomains.html\" title=\"trait halo2_gadgets::sinsemilla::HashDomains\">HashDomains</a>&lt;Affine&gt;,\n    Fixed: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;Affine&gt;,\n    Commit: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.CommitDomains.html\" title=\"trait halo2_gadgets::sinsemilla::CommitDomains\">CommitDomains</a>&lt;Affine, Fixed, Hash&gt;,</span>"],["impl&lt;Hash, Commit, Fixed&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_gadgets/sinsemilla/chip/struct.SinsemillaChip.html\" title=\"struct halo2_gadgets::sinsemilla::chip::SinsemillaChip\">SinsemillaChip</a>&lt;Hash, Commit, Fixed&gt;<span class=\"where fmt-newline\">where\n    Hash: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.HashDomains.html\" title=\"trait halo2_gadgets::sinsemilla::HashDomains\">HashDomains</a>&lt;Affine&gt;,\n    Fixed: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;Affine&gt;,\n    Commit: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.CommitDomains.html\" title=\"trait halo2_gadgets::sinsemilla::CommitDomains\">CommitDomains</a>&lt;Affine, Fixed, Hash&gt;,</span>"],["impl&lt;FixedPoints: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;Affine&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_gadgets/ecc/chip/struct.EccConfig.html\" title=\"struct halo2_gadgets::ecc::chip::EccConfig\">EccConfig</a>&lt;FixedPoints&gt;"],["impl&lt;Hash, Commit, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_gadgets/sinsemilla/chip/struct.SinsemillaConfig.html\" title=\"struct halo2_gadgets::sinsemilla::chip::SinsemillaConfig\">SinsemillaConfig</a>&lt;Hash, Commit, F&gt;<span class=\"where fmt-newline\">where\n    Hash: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.HashDomains.html\" title=\"trait halo2_gadgets::sinsemilla::HashDomains\">HashDomains</a>&lt;Affine&gt;,\n    F: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;Affine&gt;,\n    Commit: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.CommitDomains.html\" title=\"trait halo2_gadgets::sinsemilla::CommitDomains\">CommitDomains</a>&lt;Affine, F, Hash&gt;,</span>"],["impl&lt;F: PrimeFieldBits, const K: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_gadgets/utilities/lookup_range_check/struct.LookupRangeCheckConfig.html\" title=\"struct halo2_gadgets::utilities::lookup_range_check::LookupRangeCheckConfig\">LookupRangeCheckConfig</a>&lt;F, K&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_gadgets/utilities/cond_swap/struct.CondSwapConfig.html\" title=\"struct halo2_gadgets::utilities::cond_swap::CondSwapConfig\">CondSwapConfig</a>"]],
"halo2_proofs":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Advice.html\" title=\"struct halo2_proofs::plonk::Advice\">Advice</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"enum\" href=\"halo2_proofs/plonk/enum.Any.html\" title=\"enum halo2_proofs::plonk::Any\">Any</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Instance.html\" title=\"struct halo2_proofs::plonk::Instance\">Instance</a>"],["impl&lt;C: <a class=\"trait\" href=\"halo2_proofs/plonk/trait.ColumnType.html\" title=\"trait halo2_proofs::plonk::ColumnType\">ColumnType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Column.html\" title=\"struct halo2_proofs::plonk::Column\">Column</a>&lt;C&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"enum\" href=\"halo2_proofs/dev/enum.VerifyFailure.html\" title=\"enum halo2_proofs::dev::VerifyFailure\">VerifyFailure</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.Constraint.html\" title=\"struct halo2_proofs::dev::metadata::Constraint\">Constraint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.Rotation.html\" title=\"struct halo2_proofs::poly::Rotation\">Rotation</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.Gate.html\" title=\"struct halo2_proofs::dev::metadata::Gate\">Gate</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.Region.html\" title=\"struct halo2_proofs::dev::metadata::Region\">Region</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"enum\" href=\"halo2_proofs/circuit/layouter/enum.RegionColumn.html\" title=\"enum halo2_proofs::circuit::layouter::RegionColumn\">RegionColumn</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"enum\" href=\"halo2_proofs/dev/enum.FailureLocation.html\" title=\"enum halo2_proofs::dev::FailureLocation\">FailureLocation</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.Column.html\" title=\"struct halo2_proofs::dev::metadata::Column\">Column</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.VirtualCell.html\" title=\"struct halo2_proofs::dev::metadata::VirtualCell\">VirtualCell</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Selector.html\" title=\"struct halo2_proofs::plonk::Selector\">Selector</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Fixed.html\" title=\"struct halo2_proofs::plonk::Fixed\">Fixed</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.RegionStart.html\" title=\"struct halo2_proofs::circuit::RegionStart\">RegionStart</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.TableColumn.html\" title=\"struct halo2_proofs::plonk::TableColumn\">TableColumn</a>"],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"halo2_proofs/poly/commitment/struct.Blind.html\" title=\"struct halo2_proofs::poly::commitment::Blind\">Blind</a>&lt;F&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()