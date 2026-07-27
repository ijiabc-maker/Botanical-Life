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
                difficulty: "★★☆ 初心者〜中級"
            },
            room: {
                light: 3, space: 3, attention: 2, humidity: 2,
                petSafe: false, style: "wild"
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
                difficulty: "★☆☆ 超初心者向け"
            },
            room: {
                light: 1, space: 1, attention: 1, humidity: 1,
                petSafe: false, style: "trailing"
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
                difficulty: "★★★ やや気難しい"
            },
            room: {
                light: 3, space: 3, attention: 3, humidity: 2,
                petSafe: false, style: "chic"
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
                difficulty: "★☆☆ 超初心者向け"
            },
            room: {
                light: 1, space: 2, attention: 1, humidity: 1,
                petSafe: false, style: "unique"
            }
        },
        "string-of-pearls": {
            name: "グリーンネックレス",
            botanical: "Senecio rowleyanus",
            tagline:
                "丸い葉がネックレスのように連なる、見た目からして個性派。",
            specs: {
                light: "日当たり◎(明るい場所)",
                water: "乾かし気味に",
                humidity: "乾燥気味が好き",
                difficulty: "★★☆ 初心者〜中級"
            },
            room: {
                light: 3, space: 1, attention: 2, humidity: 1,
                petSafe: false, style: "unique"
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
                difficulty: "★☆☆ 超初心者向け"
            },
            room: {
                light: 1, space: 2, attention: 1, humidity: 1,
                petSafe: false, style: "unique"
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
                difficulty: "★★★ やや気難しい"
            },
            room: {
                light: 2, space: 2, attention: 3, humidity: 3,
                petSafe: true, style: "chic"
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
                difficulty: "★★☆ 初心者〜中級"
            },
            room: {
                light: 2, space: 1, attention: 2, humidity: 3,
                petSafe: true, style: "unique"
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
                difficulty: "★☆☆ 初心者向け"
            },
            room: {
                light: 2, space: 3, attention: 1, humidity: 2,
                petSafe: false, style: "chic"
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
                difficulty: "★★★ やや気難しい"
            },
            room: {
                light: 2, space: 2, attention: 3, humidity: 3,
                petSafe: true, style: "wild"
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

    function scoreRoomAnswers(answers) {
        let bestScore = -Infinity;
        let bestIds = [];

        Object.keys(PLANTS).forEach((id) => {
            const room = PLANTS[id].room;

            let score = 0;

            score += 2 - Math.abs(room.light - answers.light);
            score += 2 - Math.abs(room.space - answers.space);
            score += 2 - Math.abs(room.attention - answers.attention);
            score += 2 - Math.abs(room.humidity - answers.humidity);

            if (answers.pet) {
                score += room.petSafe ? 3 : -2;
            }

            if (room.style === answers.style) {
                score += 3;
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
                    { label: "一人でのんびり読書や映画", next: "q2x" },
                    { label: "友達を呼んでワイワイ過ごす", next: "q2y" }
                ]
            },
            q2x: {
                text: "人からよく言われる性格は?",
                options: [
                    { label: "落ち着いている、マイペース", next: "q3xa" },
                    { label: "繊細で気配り上手", next: "q3xb" }
                ]
            },
            q3xa: {
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
            q3xb: {
                text: "疲れた時、どう過ごす?",
                options: [
                    {
                        label: "静かな場所で一人になりたい",
                        result: "calathea"
                    },
                    {
                        label: "誰かに話を聞いてもらいたい",
                        result: "air-plant"
                    }
                ]
            },
            q2y: {
                text: "グループの中での自分のポジションは?",
                options: [
                    { label: "盛り上げ役、目立つタイプ", next: "q3ya" },
                    { label: "みんなをまとめるサポート役", next: "q3yb" }
                ]
            },
            q3ya: {
                text: "自分を色にたとえると?",
                options: [
                    { label: "鮮やかで目立つ色", result: "monstera" },
                    { label: "さわやかで凛とした色", result: "ficus" }
                ]
            },
            q3yb: {
                text: "チームで大事にしていることは?",
                options: [
                    { label: "柔軟に対応すること", result: "pothos" },
                    {
                        label: "芯を持ちつつ周りを支えること",
                        result: "rubber-tree"
                    },
                    {
                        label: "場を華やかにすること",
                        result: "boston-fern"
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
            ["難易度", plant.specs.difficulty]
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
