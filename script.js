document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       Plant data
    ========================================================= */

    const PLANTS = {
        monstera: {
            name: "モンステラ",
            botanical: "Monstera deliciosa",
            tagline:
                "大きく切れ込んだ葉が独特な、南国気分をくれる定番の観葉植物。",
            specs: {
                light: "日当たり◎(明るい場所)",
                water: "土が乾いたらたっぷり",
                humidity: "やや高め",
            },
            room: {
                idealLight: 2, shadeTolerance: 2, space: 3,
                droughtTolerance: 2, humidity: 2,
                petSafe: false, difficulty: 1, style: "wild"
            }
        },
        pothos: {
            name: "ポトス",
            botanical: "Epipremnum aureum",
            tagline:
                "とにかく丈夫でつるがどんどん伸びる、育てやすさNo.1クラスの相棒。",
            specs: {
                light: "日陰でも育つ",
                water: "乾いたらたっぷり",
                humidity: "特にこだわらない",
            },
            room: {
                idealLight: 2, shadeTolerance: 3, space: 1,
                droughtTolerance: 2, humidity: 1,
                petSafe: false, difficulty: 1, style: "trailing"
            }
        },
        ficus: {
            name: "フィカス・ウンベラータ",
            botanical: "Ficus umbellata",
            tagline:
                "ハート型の大きな葉が主役級の存在感。置く場所を決めたらそこがお気に入り。",
            specs: {
                light: "日当たり◎(明るい場所)",
                water: "土の表面が乾いたら",
                humidity: "普通",
            },
            room: {
                idealLight: 3, shadeTolerance: 1, space: 3,
                droughtTolerance: 2, humidity: 2,
                petSafe: false, difficulty: 2, style: "chic"
            }
        },
        sansevieria: {
            name: "サンスベリア",
            botanical: "Dracaena trifasciata",
            tagline:
                "まっすぐ伸びる葉が凛々しい、放っておいても平気なタフな一鉢。",
            specs: {
                light: "日陰でもOK",
                water: "月1〜2回でも大丈夫",
                humidity: "乾燥に強い",
            },
            room: {
                idealLight: 2, shadeTolerance: 3, space: 2,
                droughtTolerance: 3, humidity: 1,
                petSafe: false, difficulty: 1, style: "unique"
            }
        },
        "string-of-pearls": {
            name: "グリーンネックレス",
            botanical: "Senecio rowleyanus",
            tagline:
                "丸い葉がネックレスのように連なる、見た目からして個性派。" +
                "(ペットや小さなお子さんがいる場合は置き場所に注意)",
            specs: {
                light: "日当たり◎(明るい場所)",
                water: "乾かし気味に",
                humidity: "乾燥気味が好き",
            },
            room: {
                idealLight: 3, shadeTolerance: 1, space: 1,
                droughtTolerance: 3, humidity: 1,
                // petSafe is false out of caution — mildly irritant,
                // not high-toxicity, but treated as "not pet-safe"
                // for scoring purposes.
                petSafe: false, difficulty: 2, style: "unique"
            }
        },
        zz: {
            name: "ザミオクルカス(ZZプランツ)",
            botanical: "Zamioculcas zamiifolia",
            tagline:
                "つやつやの葉が並ぶ姿がスタイリッシュ。水やりを忘れても平然としている。",
            specs: {
                light: "日陰でも育つ",
                water: "乾いてからでOK",
                humidity: "特にこだわらない",
            },
            room: {
                idealLight: 2, shadeTolerance: 3, space: 2,
                droughtTolerance: 3, humidity: 1,
                petSafe: false, difficulty: 1, style: "unique"
            }
        },
        calathea: {
            name: "カラテア",
            botanical: "Calathea spp.",
            tagline:
                "葉の模様が絵画みたいに美しい、少し手をかけたくなる植物。",
            specs: {
                light: "明るい日陰",
                water: "土が乾く前に",
                humidity: "高め(こまめな霧吹きを)",
            },
            room: {
                idealLight: 2, shadeTolerance: 1, space: 2,
                droughtTolerance: 1, humidity: 3,
                petSafe: true, difficulty: 3, style: "chic"
            }
        },
        "air-plant": {
            name: "エアプランツ",
            botanical: "Tillandsia spp.",
            tagline:
                "土がいらない自由人。棚や壁、好きな場所にひょいっと飾れる。",
            specs: {
                light: "レースカーテン越し",
                water: "週2〜3回の霧吹き",
                humidity: "高めが好き",
            },
            room: {
                idealLight: 2, shadeTolerance: 2, space: 1,
                droughtTolerance: 2, humidity: 2,
                petSafe: true, difficulty: 2, style: "unique"
            }
        },
        "rubber-tree": {
            name: "ゴムの木",
            botanical: "Ficus elastica",
            tagline:
                "つやのある大きな葉が凛とした佇まい。丈夫で長く付き合える一本。",
            specs: {
                light: "日当たり◎(明るい場所)",
                water: "土が乾いたらたっぷり",
                humidity: "普通",
            },
            room: {
                idealLight: 3, shadeTolerance: 2, space: 3,
                droughtTolerance: 2, humidity: 2,
                petSafe: false, difficulty: 2, style: "chic"
            }
        },
        "boston-fern": {
            name: "ボストンファーン",
            botanical: "Nephrolepis exaltata",
            tagline:
                "ふさふさの葉が涼しげな、ちょっと手をかけたい甘えん坊。",
            specs: {
                light: "明るい日陰",
                water: "土を乾かさないように",
                humidity: "高め",
            },
            room: {
                idealLight: 2, shadeTolerance: 1, space: 2,
                droughtTolerance: 1, humidity: 3,
                petSafe: true, difficulty: 3, style: "wild"
            }
        },
        gajumaru: {
            name: "ガジュマル",
            botanical: "Ficus microcarpa",
            tagline:
                "沖縄では「幸せを呼ぶ木」として親しまれる、太い幹と" +
                "うねる気根が印象的な一鉢。",
            specs: {
                light: "日当たり普通〜◎",
                water: "土が乾いたらたっぷり",
                humidity: "普通",
            },
            room: {
                idealLight: 2, shadeTolerance: 2, space: 2,
                droughtTolerance: 2, humidity: 2,
                petSafe: false, difficulty: 1, style: "unique"
            }
        },
        flytrap: {
            name: "ハエトリソウ",
            botanical: "Dionaea muscipula",
            tagline:
                "虫を捕らえる不思議な仕組みを持つ、話のタネになること" +
                "間違いなしの食虫植物。",
            specs: {
                light: "日当たり◎(直射日光もOK)",
                water: "腰水でいつも湿らせて",
                humidity: "高め",
            },
            room: {
                idealLight: 3, shadeTolerance: 1, space: 1,
                droughtTolerance: 1, humidity: 3,
                petSafe: true, difficulty: 3, style: "unique"
            }
        },
        peperomia: {
            name: "ペペロミア",
            botanical: "Peperomia spp.",
            tagline:
                "小ぶりでぷっくりした葉がかわいい、デスクや棚に" +
                "ちょこんと置きたい存在。",
            specs: {
                light: "レースカーテン越し〜明るい日陰",
                water: "土が乾いたら",
                humidity: "普通",
            },
            room: {
                idealLight: 2, shadeTolerance: 2, space: 1,
                droughtTolerance: 2, humidity: 2,
                petSafe: true, difficulty: 1, style: "unique"
            }
        },
        aglaonema: {
            name: "アグラオネマ",
            botanical: "Aglaonema spp.",
            tagline:
                "ピンクや白の模様が入る葉が華やか。日陰に強く、" +
                "オフィスでも人気の実力派。",
            specs: {
                light: "日陰でも育つ",
                water: "土が乾いたらたっぷり",
                humidity: "普通",
            },
            room: {
                idealLight: 1, shadeTolerance: 3, space: 2,
                droughtTolerance: 2, humidity: 2,
                petSafe: false, difficulty: 1, style: "chic"
            }
        },
        coffee: {
            name: "コーヒーの木",
            botanical: "Coffea arabica",
            tagline:
                "つやのある葉と、いつか実がなるかもしれない楽しみを" +
                "持つ一本。",
            specs: {
                light: "日当たり◎(明るい場所)",
                water: "土の表面が乾いたら",
                humidity: "普通",
            },
            room: {
                idealLight: 3, shadeTolerance: 2, space: 2,
                droughtTolerance: 2, humidity: 2,
                petSafe: false, difficulty: 2, style: "chic"
            }
        },
        cactus: {
            name: "サボテン",
            botanical: "Cactaceae spp.",
            tagline:
                "水やりを忘れるくらいがちょうどいい、究極のマイペース派。" +
                "とにかく丈夫。(棘があるので置き場所には注意)",
            specs: {
                light: "日当たり◎(直射日光OK)",
                water: "月1回、乾かし気味に",
                humidity: "乾燥に強い",
            },
            room: {
                idealLight: 3, shadeTolerance: 1, space: 1,
                droughtTolerance: 3, humidity: 1,
                petSafe: true, difficulty: 1, style: "unique"
            }
        }
    };


    /* =========================================================
       Plant icons (simple botanical line-art, for the plant tag)
    ========================================================= */

    const PLANT_ICONS = {
        monstera: `
            <svg viewBox="0 0 100 100">
                <path d="M50 92 C20 88 10 55 22 28 C32 8 55 4 68 16
                         C82 28 84 55 72 74 C64 86 58 90 50 92 Z"
                      fill="#3f7a4a"/>
                <ellipse cx="38" cy="34" rx="5" ry="9" fill="#f4ecd8"
                         transform="rotate(-20 38 34)"/>
                <ellipse cx="56" cy="26" rx="4" ry="8" fill="#f4ecd8"
                         transform="rotate(12 56 26)"/>
                <ellipse cx="61" cy="50" rx="5" ry="10" fill="#f4ecd8"
                         transform="rotate(30 61 50)"/>
                <ellipse cx="45" cy="62" rx="4" ry="9" fill="#f4ecd8"
                         transform="rotate(-15 45 62)"/>
            </svg>`,
        pothos: `
            <svg viewBox="0 0 100 100">
                <path d="M30 55 Q10 70 25 90 Q35 75 30 55"
                      stroke="#3f7a4a" stroke-width="3" fill="none"/>
                <path d="M50 20 C35 20 25 32 30 46 C33 55 42 60 50 60
                         C58 60 67 55 70 46 C75 32 65 20 50 20 Z"
                      fill="#4c8a56"/>
                <path d="M28 42 C18 42 12 50 15 60 C17 66 24 69 30 69
                         C36 69 43 66 44 58 C46 50 38 42 28 42 Z"
                      fill="#5fa768"/>
                <path d="M70 45 C80 45 86 53 83 63 C81 69 74 72 68 72
                         C62 72 56 68 55 60 C53 52 60 45 70 45 Z"
                      fill="#3f7a4a"/>
            </svg>`,
        ficus: `
            <svg viewBox="0 0 100 100">
                <path d="M50 10 C25 18 15 45 25 68 C32 84 42 92 50 94
                         C58 92 68 84 75 68 C85 45 75 18 50 10 Z"
                      fill="#3d7248"/>
                <line x1="50" y1="22" x2="50" y2="86"
                      stroke="#f4ecd8" stroke-width="2" opacity="0.5"/>
            </svg>`,
        sansevieria: `
            <svg viewBox="0 0 100 100">
                <path d="M35 92 C33 60 38 30 42 12 C46 30 48 60 46 92 Z"
                      fill="#2f6b45"/>
                <path d="M50 92 C48 55 52 20 56 6 C60 20 62 55 60 92 Z"
                      fill="#3f8354"/>
                <path d="M65 92 C63 62 67 36 70 20 C74 36 76 62 74 92 Z"
                      fill="#2f6b45"/>
                <line x1="42" y1="30" x2="42" y2="80"
                      stroke="#f4ecd8" stroke-width="1.5" opacity="0.4"/>
                <line x1="56" y1="20" x2="56" y2="80"
                      stroke="#f4ecd8" stroke-width="1.5" opacity="0.4"/>
            </svg>`,
        "string-of-pearls": `
            <svg viewBox="0 0 100 100">
                <path d="M20 15 C40 25 25 45 45 55 C65 65 50 85 70 92"
                      stroke="#3f7a4a" stroke-width="3" fill="none"/>
                <circle cx="20" cy="15" r="6" fill="#5fa768"/>
                <circle cx="30" cy="27" r="6" fill="#4c8a56"/>
                <circle cx="27" cy="41" r="6" fill="#5fa768"/>
                <circle cx="43" cy="52" r="6" fill="#4c8a56"/>
                <circle cx="55" cy="63" r="6" fill="#5fa768"/>
                <circle cx="52" cy="77" r="6" fill="#4c8a56"/>
                <circle cx="66" cy="88" r="6" fill="#5fa768"/>
            </svg>`,
        zz: `
            <svg viewBox="0 0 100 100">
                <line x1="50" y1="90" x2="50" y2="15"
                      stroke="#2f6b45" stroke-width="3"/>
                <g fill="#3f8354">
                    <ellipse cx="42" cy="30" rx="7" ry="12"
                             transform="rotate(-30 42 30)"/>
                    <ellipse cx="58" cy="30" rx="7" ry="12"
                             transform="rotate(30 58 30)"/>
                    <ellipse cx="40" cy="48" rx="7" ry="12"
                             transform="rotate(-30 40 48)"/>
                    <ellipse cx="60" cy="48" rx="7" ry="12"
                             transform="rotate(30 60 48)"/>
                    <ellipse cx="42" cy="66" rx="7" ry="12"
                             transform="rotate(-30 42 66)"/>
                    <ellipse cx="58" cy="66" rx="7" ry="12"
                             transform="rotate(30 58 66)"/>
                </g>
            </svg>`,
        calathea: `
            <svg viewBox="0 0 100 100">
                <path d="M50 8 C25 20 20 50 30 75 C36 88 44 94 50 96
                         C56 94 64 88 70 75 C80 50 75 20 50 8 Z"
                      fill="#3d7248"/>
                <path d="M50 20 L38 40 M50 20 L62 40
                         M50 38 L36 58 M50 38 L64 58
                         M50 56 L40 76 M50 56 L60 76"
                      stroke="#a8d9ad" stroke-width="2.5" fill="none"
                      opacity="0.85"/>
            </svg>`,
        "air-plant": `
            <svg viewBox="0 0 100 100">
                <g fill="#4c8a56">
                    <path d="M50 55 C40 40 30 20 22 8
                             C34 14 46 32 50 55 Z"/>
                    <path d="M50 55 C58 38 66 18 72 6
                             C64 16 54 32 50 55 Z"/>
                    <path d="M50 55 C34 48 16 44 4 42
                             C16 52 32 56 50 55 Z"/>
                    <path d="M50 55 C64 46 82 40 96 36
                             C86 48 68 56 50 55 Z"/>
                    <path d="M50 55 C44 68 40 82 38 94
                             C48 86 52 70 50 55 Z"/>
                    <path d="M50 55 C58 66 66 78 72 88
                             C60 84 52 70 50 55 Z"/>
                </g>
                <circle cx="50" cy="55" r="7" fill="#c1652f"/>
            </svg>`,
        "rubber-tree": `
            <svg viewBox="0 0 100 100">
                <path d="M50 6 C24 16 16 48 28 74 C36 90 44 96 50 98
                         C56 96 64 90 72 74 C84 48 76 16 50 6 Z"
                      fill="#2e5c39"/>
                <line x1="50" y1="18" x2="50" y2="90"
                      stroke="#a8d9ad" stroke-width="2" opacity="0.6"/>
            </svg>`,
        "boston-fern": `
            <svg viewBox="0 0 100 100">
                <g stroke="#3f7a4a" stroke-width="2.5" fill="none"
                   stroke-linecap="round">
                    <path d="M50 92 C48 65 40 40 22 18"/>
                    <path d="M50 92 C50 62 46 34 34 10"/>
                    <path d="M50 92 C50 60 50 30 50 6"/>
                    <path d="M50 92 C51 62 55 34 66 10"/>
                    <path d="M50 92 C52 65 60 40 78 18"/>
                </g>
            </svg>`,
        gajumaru: `
            <svg viewBox="0 0 100 100">
                <ellipse cx="50" cy="30" rx="30" ry="24" fill="#3f7a4a"/>
                <path d="M35 50 C30 65 32 80 30 92 M50 50 L50 92
                         M65 50 C70 65 68 80 70 92"
                      stroke="#8a5a34" stroke-width="4" fill="none"
                      stroke-linecap="round"/>
                <ellipse cx="50" cy="50" rx="15" ry="10" fill="#8a5a34"/>
            </svg>`,
        flytrap: `
            <svg viewBox="0 0 100 100">
                <g stroke="#3f7a4a" stroke-width="3">
                    <line x1="35" y1="92" x2="40" y2="55"/>
                    <line x1="65" y1="92" x2="60" y2="55"/>
                    <line x1="50" y1="92" x2="50" y2="50"/>
                </g>
                <path d="M40 55 C30 40 30 20 40 10 C42 25 45 40 50 50
                         C55 40 58 25 60 10 C70 20 70 40 60 55
                         C55 60 45 60 40 55 Z"
                      fill="#5fa768"/>
                <g stroke="#c1652f" stroke-width="1.5" opacity="0.6">
                    <line x1="40" y1="13" x2="60" y2="13"/>
                    <line x1="42" y1="19" x2="58" y2="19"/>
                    <line x1="44" y1="25" x2="56" y2="25"/>
                </g>
            </svg>`,
        peperomia: `
            <svg viewBox="0 0 100 100">
                <g fill="#4c8a56">
                    <ellipse cx="35" cy="40" rx="14" ry="16"/>
                    <ellipse cx="65" cy="38" rx="14" ry="16"/>
                    <ellipse cx="50" cy="60" rx="15" ry="17"/>
                    <ellipse cx="30" cy="66" rx="12" ry="14"/>
                    <ellipse cx="70" cy="66" rx="12" ry="14"/>
                </g>
            </svg>`,
        aglaonema: `
            <svg viewBox="0 0 100 100">
                <path d="M50 10 C28 20 22 48 32 72 C38 86 45 93 50 95
                         C55 93 62 86 68 72 C78 48 72 20 50 10 Z"
                      fill="#3d7248"/>
                <path d="M50 24 C44 40 44 60 50 84"
                      stroke="#ffc9d3" stroke-width="6" fill="none"
                      opacity="0.85"/>
            </svg>`,
        coffee: `
            <svg viewBox="0 0 100 100">
                <path d="M50 8 C30 18 22 45 32 68 C38 84 45 92 50 94
                         C55 92 62 84 68 68 C78 45 70 18 50 8 Z"
                      fill="#2e5c39"/>
                <line x1="50" y1="20" x2="50" y2="88"
                      stroke="#a8d9ad" stroke-width="2" opacity="0.6"/>
                <circle cx="38" cy="55" r="5" fill="#c1652f"/>
                <circle cx="62" cy="60" r="5" fill="#a04f24"/>
            </svg>`,
        cactus: `
            <svg viewBox="0 0 100 100">
                <path d="M40 92 L40 40 C40 25 60 25 60 40 L60 92 Z"
                      fill="#4c8a56"/>
                <path d="M40 55 C25 55 25 40 35 38"
                      stroke="#4c8a56" stroke-width="10" fill="none"
                      stroke-linecap="round"/>
                <path d="M60 65 C75 65 75 50 65 48"
                      stroke="#4c8a56" stroke-width="10" fill="none"
                      stroke-linecap="round"/>
                <circle cx="50" cy="26" r="8" fill="#ff8fa3"/>
                <g stroke="#f4ecd8" stroke-width="1.5" opacity="0.6">
                    <line x1="44" y1="45" x2="41" y2="45"/>
                    <line x1="56" y1="45" x2="59" y2="45"/>
                    <line x1="44" y1="60" x2="41" y2="60"/>
                    <line x1="56" y1="60" x2="59" y2="60"/>
                    <line x1="44" y1="75" x2="41" y2="75"/>
                    <line x1="56" y1="75" x2="59" y2="75"/>
                </g>
            </svg>`
    };


    /* =========================================================
       Room quiz — point-based
    ========================================================= */

    const ROOM_QUESTIONS = [
        {
            text: "置きたい場所の日当たりは?",
            key: "light",
            options: [
                { label: "ほとんど日が入らない", value: 1 },
                { label: "レースカーテン越しにやわらかい光", value: 2 },
                { label: "一日中よく日が当たる", value: 3 }
            ]
        },
        {
            text: "置き場所の広さは?",
            key: "space",
            options: [
                { label: "棚やデスクの上に小さく置きたい", value: 1 },
                { label: "床に直接置けるスペースがある", value: 2 },
                { label: "部屋の主役にしたいくらい広い", value: 3 }
            ]
        },
        {
            text: "水やり、どれくらいマメにできそう?",
            key: "attention",
            options: [
                { label: "正直、忘れがち…", value: 1 },
                { label: "週1回のペースなら続けられる", value: 2 },
                { label: "毎日お世話するのも苦じゃない", value: 3 }
            ]
        },
        {
            text: "お部屋の湿度は?",
            key: "humidity",
            options: [
                { label: "エアコンでわりと乾燥しがち", value: 1 },
                { label: "普通、特に意識したことがない", value: 2 },
                { label: "加湿器がある/浴室や洗面所に近い", value: 3 }
            ]
        },
        {
            text: "ペットや小さなお子さんは?",
            key: "pet",
            options: [
                { label: "いる", value: true },
                { label: "いない", value: false }
            ]
        },
        {
            text: "好きな見た目のイメージは?",
            key: "style",
            options: [
                { label: "大きくてワイルドな葉っぱ", value: "wild" },
                { label: "スッと洗練された佇まい", value: "chic" },
                { label: "つる性でどんどん垂れ下がるタイプ", value: "trailing" },
                { label: "個性的でユニークな見た目", value: "unique" }
            ]
        }
    ];

    /**
     * Light score blends two things:
     * - closeness to the plant's ideal light level
     * - a bonus/penalty from shade tolerance, but only in dim-ish
     *   rooms (where tolerance actually matters). In bright rooms,
     *   shade tolerance is irrelevant, so it's not applied.
     */
    function lightScore(room, userLight) {
        const closeness = 2 - Math.abs(room.idealLight - userLight);

        if (userLight <= 2) {
            const toleranceBonus = room.shadeTolerance - 2; // -1..+1
            return closeness + toleranceBonus * 0.5;
        }

        return closeness;
    }

    /**
     * Care score combines two separate concerns from one answer
     * (how attentive the person can be, 1=forgetful..3=daily):
     * - drought tolerance: only matters if the person is forgetful.
     *   A plant that tolerates neglect is never a bad pick, so no
     *   penalty for "more tolerance than needed" — only a penalty
     *   for falling short of what's needed.
     * - difficulty: the plant's overall fussiness shouldn't exceed
     *   what the person is willing to commit to; same shortfall-only
     *   logic.
     */
    function careScore(room, userAttention) {
        const neededDrought = 4 - userAttention;
        const droughtShortfall =
            Math.max(0, neededDrought - room.droughtTolerance);

        const difficultyShortfall =
            Math.max(0, room.difficulty - userAttention);

        return (
            (2 - droughtShortfall) + (2 - difficultyShortfall)
        ) / 2;
    }

    function scoreRoomAnswers(answers) {
        let bestScore = -Infinity;
        let bestIds = [];

        Object.keys(PLANTS).forEach((id) => {
            const room = PLANTS[id].room;

            let score = 0;

            score += lightScore(room, answers.light);
            score += 2 - Math.abs(room.space - answers.space);
            score += careScore(room, answers.attention);
            score += 2 - Math.abs(room.humidity - answers.humidity);

            if (answers.pet) {
                score += room.petSafe ? 3 : -2;
            }

            // Aesthetic preference is a smaller bonus on top of the
            // environmental/care fit above, not a primary factor.
            if (room.style === answers.style) {
                score += 2;
            }

            if (score > bestScore) {
                bestScore = score;
                bestIds = [id];
            } else if (score === bestScore) {
                bestIds.push(id);
            }
        });

        return bestIds[Math.floor(Math.random() * bestIds.length)];
    }


    /* =========================================================
       Personality quiz — flowchart
    ========================================================= */

    const PERSONALITY_TREE = {
        start: "q1",
        nodes: {
            q1: {
                text: "週末の理想の過ごし方は?",
                options: [
                    { label: "一人でのんびり読書や映画", next: "q2-calm" },
                    { label: "友達を呼んでワイワイ過ごす", next: "q2-social" },
                    {
                        label: "外に出て体を動かす、自然に触れる",
                        next: "q2-active"
                    }
                ]
            },

            /* ---- calm branch (6 leaves) ---- */
            "q2-calm": {
                text: "人からよく言われる性格は?",
                options: [
                    {
                        label: "落ち着いている、マイペース",
                        next: "q3-calm-a"
                    },
                    {
                        label: "繊細で自分の時間を大切にする",
                        next: "q3-calm-b"
                    }
                ]
            },
            "q3-calm-a": {
                text: "新しいことに挑戦するのは得意?",
                options: [
                    {
                        label: "得意、じっくり計画してから動く",
                        result: "sansevieria"
                    },
                    {
                        label: "苦手、慣れた環境が落ち着く",
                        result: "zz"
                    },
                    {
                        label: "気分次第、自由にやりたい",
                        result: "string-of-pearls"
                    }
                ]
            },
            "q3-calm-b": {
                text: "自分の時間、どう過ごしたい?",
                options: [
                    {
                        label: "静かな場所で一人になりたい",
                        result: "calathea"
                    },
                    {
                        label: "誰かに話を聞いてもらいたい",
                        result: "air-plant"
                    },
                    {
                        label: "小さな趣味にじっくり没頭する",
                        result: "peperomia"
                    }
                ]
            },

            /* ---- social branch (6 leaves) ---- */
            "q2-social": {
                text: "グループの中での自分のポジションは?",
                options: [
                    {
                        label: "盛り上げ役、目立つタイプ",
                        next: "q3-social-a"
                    },
                    {
                        label: "みんなをまとめるサポート役",
                        next: "q3-social-b"
                    }
                ]
            },
            "q3-social-a": {
                text: "自分を色にたとえると?",
                options: [
                    { label: "鮮やかで目立つ色", result: "monstera" },
                    { label: "さわやかで凛とした色", result: "ficus" },
                    {
                        label: "華やかで柔らかい色",
                        result: "boston-fern"
                    }
                ]
            },
            "q3-social-b": {
                text: "チームで大事にしていることは?",
                options: [
                    { label: "柔軟に対応すること", result: "pothos" },
                    {
                        label: "芯を持ちつつ周りを支えること",
                        result: "rubber-tree"
                    },
                    {
                        label: "目立たなくても頼られる存在でいること",
                        result: "aglaonema"
                    }
                ]
            },

            /* ---- active branch (4 leaves) ---- */
            "q2-active": {
                text: "自然の中でどう過ごしたい?",
                options: [
                    {
                        label: "多少ハードでも力強く楽しみたい",
                        next: "q3-active-a"
                    },
                    {
                        label: "自分のこだわりをじっくり追求したい",
                        next: "q3-active-b"
                    }
                ]
            },
            "q3-active-a": {
                text: "困難な状況でも、どう振る舞う?",
                options: [
                    {
                        label: "たくましく乗り越える",
                        result: "gajumaru"
                    },
                    {
                        label: "マイペースにやり過ごす",
                        result: "cactus"
                    }
                ]
            },
            "q3-active-b": {
                text: "好きなことへの向き合い方は?",
                options: [
                    {
                        label: "とことん探求する",
                        result: "coffee"
                    },
                    {
                        label: "人と違う視点で楽しむ",
                        result: "flytrap"
                    }
                ]
            }
        }
    };


    /* =========================================================
       DOM references
    ========================================================= */

    const screens = {
        landing: document.getElementById("screen-landing"),
        room: document.getElementById("screen-room-quiz"),
        personality: document.getElementById("screen-personality-quiz"),
        result: document.getElementById("screen-result")
    };

    const roomProgressEl = document.getElementById("room-progress");
    const roomCountEl = document.getElementById("room-question-count");
    const roomTextEl = document.getElementById("room-question-text");
    const roomOptionsEl = document.getElementById("room-options");

    const personalityProgressEl =
        document.getElementById("personality-progress");
    const personalityCountEl =
        document.getElementById("personality-question-count");
    const personalityTextEl =
        document.getElementById("personality-question-text");
    const personalityOptionsEl =
        document.getElementById("personality-options");

    const plantTagIcon = document.getElementById("plant-tag-icon");
    const plantTagName = document.getElementById("plant-tag-name");
    const plantTagBotanical = document.getElementById("plant-tag-botanical");
    const plantTagTagline = document.getElementById("plant-tag-tagline");
    const plantTagSpecs = document.getElementById("plant-tag-specs");
    const resultKicker = document.getElementById("result-kicker");

    const retryButton = document.getElementById("retry-button");
    const otherQuizButton = document.getElementById("other-quiz-button");
    const copyButton = document.getElementById("copy-button");


    /* =========================================================
       State
    ========================================================= */

    let currentQuiz = null; // "room" | "personality"
    let roomStep = 0;
    let roomAnswers = {};
    let personalityNodeId = PERSONALITY_TREE.start;
    let personalityPath = [];
    let lastResultId = null;


    /* =========================================================
       Screen switching
    ========================================================= */

    function showScreen(name) {
        Object.keys(screens).forEach((key) => {
            const isTarget = key === name;

            screens[key].hidden = !isTarget;
            screens[key].classList.toggle("is-active", isTarget);

            if (isTarget) {
                screens[key].classList.remove("screen");
                void screens[key].offsetWidth;
                screens[key].classList.add("screen");
            }
        });

        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    /* =========================================================
       Room quiz flow
    ========================================================= */

    function startRoomQuiz() {
        currentQuiz = "room";
        roomStep = 0;
        roomAnswers = {};

        buildProgress(roomProgressEl, ROOM_QUESTIONS.length);
        renderRoomQuestion();
        showScreen("room");
    }

    function renderRoomQuestion() {
        const question = ROOM_QUESTIONS[roomStep];

        roomCountEl.textContent =
            `Q${roomStep + 1} / ${ROOM_QUESTIONS.length}`;

        roomTextEl.textContent = question.text;

        roomOptionsEl.innerHTML = "";

        question.options.forEach((option) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "quiz-option";
            button.textContent = option.label;

            button.addEventListener("click", () => {
                roomAnswers[question.key] = option.value;
                updateProgress(roomProgressEl, roomStep + 1);

                if (roomStep < ROOM_QUESTIONS.length - 1) {
                    roomStep += 1;
                    renderRoomQuestion();
                } else {
                    const plantId = scoreRoomAnswers(roomAnswers);
                    showResult(plantId, "room");
                }
            });

            roomOptionsEl.appendChild(button);
        });
    }


    /* =========================================================
       Personality quiz flow
    ========================================================= */

    function startPersonalityQuiz() {
        currentQuiz = "personality";
        personalityNodeId = PERSONALITY_TREE.start;
        personalityPath = [];

        buildProgress(personalityProgressEl, 3);
        renderPersonalityNode();
        showScreen("personality");
    }

    function renderPersonalityNode() {
        const node = PERSONALITY_TREE.nodes[personalityNodeId];

        personalityCountEl.textContent =
            `Q${personalityPath.length + 1}`;

        personalityTextEl.textContent = node.text;

        personalityOptionsEl.innerHTML = "";

        node.options.forEach((option) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "quiz-option";
            button.textContent = option.label;

            button.addEventListener("click", () => {
                personalityPath.push(personalityNodeId);
                updateProgress(
                    personalityProgressEl,
                    personalityPath.length
                );

                if (option.result) {
                    showResult(option.result, "personality");
                } else {
                    personalityNodeId = option.next;
                    renderPersonalityNode();
                }
            });

            personalityOptionsEl.appendChild(button);
        });
    }


    /* =========================================================
       Progress vine
    ========================================================= */

    function buildProgress(listEl, total) {
        listEl.innerHTML = "";

        for (let i = 0; i < total; i++) {
            const item = document.createElement("li");
            listEl.appendChild(item);
        }
    }

    function updateProgress(listEl, filledCount) {
        const items = listEl.querySelectorAll("li");

        items.forEach((item, index) => {
            item.classList.toggle("is-filled", index < filledCount);
        });
    }


    /* =========================================================
       Result screen
    ========================================================= */

    function difficultyLabel(level) {
        if (level === 1) {
            return "★☆☆ 初心者向け";
        }

        if (level === 2) {
            return "★★☆ 初心者〜中級";
        }

        return "★★★ やや気難しい";
    }

    function showResult(plantId, quizType) {
        const plant = PLANTS[plantId];

        lastResultId = plantId;

        resultKicker.textContent =
            quizType === "room"
                ? "あなたのお部屋に合う植物は"
                : "あなたの性格に合う植物は";

        plantTagIcon.innerHTML = PLANT_ICONS[plantId];
        plantTagName.textContent = plant.name;
        plantTagBotanical.textContent = plant.botanical;
        plantTagTagline.textContent = plant.tagline;

        plantTagSpecs.innerHTML = "";

        const specEntries = [
            ["日当たり", plant.specs.light],
            ["水やり", plant.specs.water],
            ["湿度", plant.specs.humidity],
            ["難易度", difficultyLabel(plant.room.difficulty)]
        ];

        specEntries.forEach(([label, value]) => {
            const wrap = document.createElement("div");

            const dt = document.createElement("dt");
            dt.className = "spec-label";
            dt.textContent = label;

            const dd = document.createElement("dd");
            dd.className = "spec-value";
            dd.textContent = value;

            wrap.appendChild(dt);
            wrap.appendChild(dd);
            plantTagSpecs.appendChild(wrap);
        });

        otherQuizButton.textContent =
            quizType === "room"
                ? "性格タイプ診断も試す"
                : "お部屋タイプ診断も試す";

        otherQuizButton.dataset.other =
            quizType === "room" ? "personality" : "room";

        showScreen("result");
    }


    /* =========================================================
       Event wiring
    ========================================================= */

    document.querySelectorAll("[data-start]").forEach((button) => {
        button.addEventListener("click", () => {
            const mode = button.dataset.start;

            if (mode === "room") {
                startRoomQuiz();
            } else {
                startPersonalityQuiz();
            }
        });
    });

    document.querySelectorAll("[data-back]").forEach((button) => {
        button.addEventListener("click", () => {
            showScreen("landing");
        });
    });

    retryButton.addEventListener("click", () => {
        if (currentQuiz === "room") {
            startRoomQuiz();
        } else {
            startPersonalityQuiz();
        }
    });

    otherQuizButton.addEventListener("click", () => {
        const other = otherQuizButton.dataset.other;

        if (other === "room") {
            startRoomQuiz();
        } else {
            startPersonalityQuiz();
        }
    });

    copyButton.addEventListener("click", async () => {
        const plant = PLANTS[lastResultId];

        const text =
            `🌿 Leaf Match診断結果 🌿\n` +
            `あなたに合う植物は「${plant.name}」でした!\n` +
            `${plant.tagline}`;

        try {
            await navigator.clipboard.writeText(text);
            copyButton.textContent = "コピーしました!";
        } catch (error) {
            copyButton.textContent = "コピーできませんでした";
        }

        setTimeout(() => {
            copyButton.textContent = "結果をコピーする";
        }, 2000);
    });

});
