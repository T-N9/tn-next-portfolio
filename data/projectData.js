export const projectData = [
  {
    _createdAt: "2022-10-05T15:15:41Z",
    _id: "3ab0f0ce-230d-403c-80b5-4fc94196bcb7",
    _rev: "z7EiK8inwybcbhSAyOUJNK",
    _type: "projects",
    _updatedAt: "2022-12-01T12:20:20Z",
    category: "front-end",
    challenge: [
      {
        _key: "93f83ef4d43d",
        _type: "block",
        children: [
          {
            _key: "db22991797a6",
            _type: "span",
            marks: [],
            text: "Chord Theory",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "198b93207eaf",
        _type: "block",
        children: [
          {
            _key: "be7bf9fe11e7",
            _type: "span",
            marks: [],
            text: "Creativity",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "763141b06759",
        _type: "block",
        children: [
          {
            _key: "16cd3605a5b6",
            _type: "span",
            marks: [],
            text: "Research",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "612757923974",
        _type: "block",
        children: [
          {
            _key: "94064502f09c",
            _type: "span",
            marks: [],
            text: "Logical Thinking",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "247ab4a6ab2e",
        _type: "block",
        children: [
          {
            _key: "75fa493d1a110",
            _type: "span",
            marks: [],
            text: "This personal project has the most complicated logic I have ever done. I had to learn and research the theory and similar application flow to deliver the best usability.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    colors: [
      "#FFA726,Sunshade",
      "#F57C00,Gold Drop",
      "#8B83FF,Malibu",
      "#2F4858,Pickled Bluewood",
    ],
    conclusion: [
      {
        _key: "1a1ccedec41f",
        _type: "block",
        children: [
          {
            _key: "ef56085a5a550",
            _type: "span",
            marks: [],
            text: "This project brought me opportunities for my education and career as I promoted it online. There are uncompleted things to be implemented with this project in the future. So, There will be new challenges and I will work for them.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    description:
      "Developing a pocket guitar chord transposing and song lyric generator.",
    designing: [
      {
        _key: "b12787a53e52",
        _type: "block",
        children: [
          {
            _key: "a963d4746f8d0",
            _type: "span",
            marks: [],
            text: "I learned from other online chord transposers and generators while designing the UI. There must be a convenient experience using the program and getting the expected output in an appropriate amount of time. I tried my best for the UI and planning to improve the UX of this project flow. As mentioned above, the project is targeted to large screen users for more productivity at typing the lyric and outputting the result.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    development: [
      {
        _key: "18fe4206ac70",
        _type: "block",
        children: [
          {
            _key: "188aaaa7d1770",
            _type: "span",
            marks: [],
            text: "This project is aimed at amateur guitar players who find it tricky in transposing chords. If you are a songwriter and want to present your songs to others, Gui-Transpo also has a feature to generate a lyric board.\n\nWhen we are going to sing a song properly, we have to consider if we can sing with the original key or if we have to adjust to a point that matches our vocal range. Your performance will be smooth and ready if you always keep in touch with music theory. But if a person like me can play only C D G Em round chords, there will be some issues in presenting a song.\n\n🔸Transposer\nTransposing guitar chords up to 12 levels. It extracts only guitar chords of user-inputted lyric+chord+song parts. When all the chords are separated into an array, I prepared the chord data for transposing and implemented the transposing logic.\n\n🔸Lyric Board\nGenerating a tidy lyric board with song parts (Intro, Verse, Chorus,...), chords, and lyrics. It also has a conversion of Flat chords and sharp chords. Flat chord conversion is the default setting.\n\n🔸Auto-Scroll\nWhen you have to perform a song and you have to look at the lyrics, this will be a useful feature. You can adjust at different scrolling speeds before singing a song.\n\n🔸Chord Chart\nA user can check every chord chart on a lyric board. You can toggle a floating chord board while auto-scrolling is performed.\nThe chord board is also draggable so you can place it at your convenience. Each of the chord charts is clickable and provides all chart data for a chord. I use ",
          },
          {
            _key: "f93309b71d09",
            _type: "span",
            marks: ["86e155567ffb"],
            text: "ChordDB",
          },
          {
            _key: "af2b6e038ca9",
            _type: "span",
            marks: [],
            text: " to generate chord data which is used in displaying chord charts.\n\n🔸Printing\nYou can print your customized lyric board with browser built-in functions in PDF format. This feature depends on which browser you are currently using.\n\n🔸UX\nThe overall user experience of this application has some minor issues. In the current version, Gui-Transpo is fully usable on large-screen devices. But on mobile devices, you will probably find it a little handier when writing a lyric input.\n\nIn this beta version, it can proceed only with common chords like major, minor, 7, and major 7.\n\nOnly a registered user can save lyric boards. If you are not registered, you can only proceed with demo data.\n\nIf you are a guitarist, feel free to suggest to me what kind of features I should implement in this project. Please leave your thoughts on my project.\n\nFor more info in my GitHub repo.",
          },
        ],
        markDefs: [
          {
            _key: "86e155567ffb",
            _type: "link",
            href: "https://github.com/tombatossals/chords-db",
          },
        ],
        style: "normal",
      },
      {
        _key: "e13760d27975",
        _type: "block",
        children: [
          {
            _key: "8896485e81fa",
            _type: "span",
            marks: ["strong"],
            text: "GitHub Repo - ",
          },
          {
            _key: "449a41df30ec",
            _type: "span",
            marks: ["code", "ab9d8c8dae86"],
            text: "https://github.com/tenyain/gui-transposer-2022",
          },
        ],
        markDefs: [
          {
            _key: "ab9d8c8dae86",
            _type: "link",
            href: "https://github.com/tenyain/gui-transposer-2022",
          },
        ],
        style: "normal",
      },
    ],
    icon: "code-slash",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-9974424b7a27f334467bc7ccc75e7d9b43366a51-1347x780-png",
        _type: "reference",
      },
    },
    introduction: [
      {
        _key: "1b2c70c35c94",
        _type: "block",
        children: [
          {
            _key: "97a5ef777fdd0",
            _type: "span",
            marks: [],
            text: "Are you a newbie guitarist or a composer? Sometimes we have to manage a song to customize matching our vocal range or find a perfect version of a song to play with a guitar. Gui-Transpo is a place to generate or customize guitar chords and lyrics with storing the data so that you can access it and sing along with it.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    mockup: {
      _type: "image",
      asset: {
        _ref: "image-556e34544cdd2d74995c5dd19dd7d1b09884e3db-2200x1274-webp",
        _type: "reference",
      },
    },
    mockup_d: {
      _type: "image",
      asset: {
        _ref: "image-dea7629213ca3a660390f09397622a5370ff761e-5464x3072-png",
        _type: "reference",
      },
    },
    order: 0,
    pandp: [
      {
        _key: "e81f99271ae8",
        _type: "block",
        children: [
          {
            _key: "7c21048071330",
            _type: "span",
            marks: [],
            text: "Researching concepts",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "e85eba4bec9b",
        _type: "block",
        children: [
          {
            _key: "43d9c3da4cbb",
            _type: "span",
            marks: [],
            text: "I am just an amateur campfire guitarist while implementing this project. Guitar chords theory can sometimes be tricky for beginners. I have to research many other applications to understand their user flows, concepts, and how they manage the inputted possibilities to reduce the rate of logical error occurrence. My first challenge is making a formula of a regular expression to detect all the common guitar chords among the inputted text. When all the chords are separated into an array, I prepared the chord data for transposing and implemented the transposing logic.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "38543bd4eee0",
        _type: "block",
        children: [
          {
            _key: "1c7f42a6e5da",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "f8575fe27a78",
        _type: "block",
        children: [
          {
            _key: "4d70ea63da150",
            _type: "span",
            marks: [],
            text: "Chord data from Chord Database",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "d7da21d5d46f",
        _type: "block",
        children: [
          {
            _key: "e94450feb096",
            _type: "span",
            marks: [],
            text: "I use ChordDB to generate chord data which is used in displaying chord charts. In current beta version, only (major, minor, 7 and minor7) chord data are generated.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "6f3c9f9b43fe",
        _type: "block",
        children: [
          {
            _key: "61ee79dc3692",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "df61ddeed177",
        _type: "block",
        children: [
          {
            _key: "36488d0636970",
            _type: "span",
            marks: [],
            text: "What are the techs?",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "ae3cdea5b070",
        _type: "block",
        children: [
          {
            _key: "87c1bfe25a42",
            _type: "span",
            marks: [],
            text: "- Front-end - ",
          },
          {
            _key: "bce8fb840880",
            _type: "span",
            marks: ["0681e16267dd"],
            text: "React",
          },
          {
            _key: "43346ad1e016",
            _type: "span",
            marks: [],
            text: "\n- Data management - ",
          },
          {
            _key: "ee4b90c79a22",
            _type: "span",
            marks: ["fd958911ed8a"],
            text: "Firebase",
          },
          {
            _key: "b89feec35856",
            _type: "span",
            marks: [],
            text: "\n- Styling - ",
          },
          {
            _key: "b80165e64998",
            _type: "span",
            marks: ["5f0e2da1cf21"],
            text: "TailwindCSS",
          },
        ],
        markDefs: [
          {
            _key: "0681e16267dd",
            _type: "link",
            href: "https://reactjs.org/",
          },
          {
            _key: "fd958911ed8a",
            _type: "link",
            href: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjF-JzZ--n6AhWxgksFHUdmAjYYABAAGgJzZg&ohost=www.google.com&cid=CAESbOD2Tzc5EGueYvPLgR56HpYqDGR36u_a7GqV-4EeqMEAfg1NLHmgtdVgpfPhiRBGRJhmGUdacD3lp5H5_fbsH6hUR9qDmZ78sHuMm5hBEf7vyK32UVLotrkE05VN1VwJUVOreD05BXNhxc0jEg&sig=AOD64_28LIlFV_L-njNhSZMJhsQ8ggFMAw&q&adurl&ved=2ahUKEwjng5bZ--n6AhVNS2wGHQO7CzQQ0Qx6BAgJEAE",
          },
          {
            _key: "5f0e2da1cf21",
            _type: "link",
            href: "https://tailwindcss.com/",
          },
        ],
        style: "normal",
      },
      {
        _key: "fc5be0170b00",
        _type: "block",
        children: [
          {
            _key: "c64811b148d2",
            _type: "span",
            marks: [],
            text: "- UI Component - ",
          },
          {
            _key: "ead817fea013",
            _type: "span",
            marks: ["e9b4986d25c6"],
            text: "Tailwind Headless UI",
          },
          {
            _key: "6b6c4b5ad1f9",
            _type: "span",
            marks: [],
            text: "\n- Chord Data - ",
          },
          {
            _key: "cdb6f19a91ff",
            _type: "span",
            marks: ["8896e6ecf423"],
            text: "ChordDB",
          },
          {
            _key: "a209c2e2652a",
            _type: "span",
            marks: [],
            text: "\n- State Management - ",
          },
          {
            _key: "baca827199d5",
            _type: "span",
            marks: ["6cdc7359b44c"],
            text: "Redux Toolkit",
          },
          {
            _key: "345ca38228ec",
            _type: "span",
            marks: [],
            text: "\n- Routing - ",
          },
          {
            _key: "a56716a3f9ea",
            _type: "span",
            marks: ["65864693a0f5"],
            text: "React Router",
          },
        ],
        markDefs: [
          {
            _key: "8896e6ecf423",
            _type: "link",
            href: "https://github.com/tombatossals/chords-db",
          },
          {
            _key: "e9b4986d25c6",
            _type: "link",
            href: "https://headlessui.com/",
          },
          {
            _key: "6cdc7359b44c",
            _type: "link",
            href: "https://redux-toolkit.js.org/",
          },
          {
            _key: "65864693a0f5",
            _type: "link",
            href: "https://reactrouter.com/",
          },
        ],
        style: "normal",
      },
    ],
    period: "July 2022 - present",
    result: [
      {
        _key: "e662fc1abda6",
        _type: "block",
        children: [
          {
            _key: "d2f453bdd106",
            _type: "span",
            marks: [],
            text: "Customized creation",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "f9a03208f4f3",
        _type: "block",
        children: [
          {
            _key: "17dd558b68b0",
            _type: "span",
            marks: [],
            text: "Understanding lyric-chord logic",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "4c471b2e8ba1",
        _type: "block",
        children: [
          {
            _key: "f4bb4495b280",
            _type: "span",
            marks: [],
            text: "Problem solving",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "16e7344e54d5",
        _type: "block",
        children: [
          {
            _key: "2fa89c5877a40",
            _type: "span",
            marks: [],
            text: "After publishing this project, I gained knowledge and energy to create new problem solvers. There are a lot of features to be working on and I will create a finer version of this project.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    role: "front-end",
    slug: {
      _type: "slug",
      current: "gui-transpo",
    },
    status: "developing",
    title: "Gui-Transpo",
    type: "personal",
    url: "https://guitranspo.tenyain.com/",
  },
  {
    _createdAt: "2022-02-24T07:43:24Z",
    _id: "6de078b3-8426-42b5-be09-b455b84d3745",
    _rev: "z7EiK8inwybcbhSAyNkN8y",
    _type: "projects",
    _updatedAt: "2022-12-01T01:35:19Z",
    category: "front-end",
    challenge: [
      {
        _key: "917142a11bb7",
        _type: "block",
        children: [
          {
            _key: "811fa47b198b0",
            _type: "span",
            marks: [],
            text: "Data collection",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "6f088d985cd8",
        _type: "block",
        children: [
          {
            _key: "98123272859d",
            _type: "span",
            marks: [],
            text: "Data classification",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "fbfdf7e173f7",
        _type: "block",
        children: [
          {
            _key: "a155d8ae1d24",
            _type: "span",
            marks: [],
            text: "State management",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "e0a1f1e055af",
        _type: "block",
        children: [
          {
            _key: "9f93e749379f",
            _type: "span",
            marks: [],
            text: "Usability",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "3a05da7e6c5d",
        _type: "block",
        children: [
          {
            _key: "561b9fcd811f",
            _type: "span",
            marks: [],
            text: "The challenge is to organize and classify collected data to deliver an appropriate result for user searching. As the project is one of my earliest experiments when learning React, state management, and life cycle concepts were major things to focus on.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    colors: [
      "#E05400,Trinidad",
      "#55433B,Kabul",
      "#3D507B,Eastbay",
      "#8BE386,Pastel",
      "#2F4858,Bluewood",
    ],
    conclusion: [
      {
        _key: "02cae020344d",
        _type: "block",
        children: [
          {
            _key: "3f378c58319e0",
            _type: "span",
            marks: [],
            text: "Overall, I designed and developed this website and its brand from a scratch to deployment. This project gave me the vision to promote and provide underrated tools but applicable things in front of users. I hope that I could collect more and more information and improve project usability in the near future.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    description: "All in one resources for developers, learners and designers.",
    designing: [
      {
        _key: "15e243bfce99",
        _type: "block",
        children: [
          {
            _key: "1cf740da318f",
            _type: "span",
            marks: [],
            text: "Domatio is designed to be an easy-to-use tool. There are only three main components in this project. A sidebar, a grid view and a navigation bar. The navigation bar has an input field to search keywords and item names. The interactive side menu is playing a major role in this project. ",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "d01b930c30c1",
        _type: "block",
        children: [
          {
            _key: "8edc7500502c",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "d70d5f70057f",
        _type: "block",
        children: [
          {
            _key: "9ad0b72465cd",
            _type: "span",
            marks: [],
            text: "I use ",
          },
          {
            _key: "ff395e99958a",
            _type: "span",
            marks: ["6e42e08b8fbb"],
            text: "Gradient Magic",
          },
          {
            _key: "cd20fab47e48",
            _type: "span",
            marks: [],
            text: " for non-image thumbnails. This gradient tool is totally amazing and you can play with colors when generating one.",
          },
        ],
        markDefs: [
          {
            _key: "6e42e08b8fbb",
            _type: "link",
            href: "https://www.gradientmagic.com/",
          },
        ],
        style: "normal",
      },
      {
        _key: "698076f51b5b",
        _type: "block",
        children: [
          {
            _key: "42653e5a4942",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "509cbe2ac442",
        _type: "block",
        children: [
          {
            _key: "95d90732b878",
            _type: "span",
            marks: [],
            text: "The design is mobile friendly and as I have mention on above that . You may find a weak point on the mobile screens cause of less data presentation. I will try to solve this issue in future.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    development: [
      {
        _key: "40309122d9a2",
        _type: "block",
        children: [
          {
            _key: "78f2334a18e30",
            _type: "span",
            marks: [],
            text: "This is one of my early React practical projects to implement from my ideas. It was built with simple technologies like Context, custom SCSS and manually inputted JSON data file. I have plans to immigrate the data to a CMS system in future versions.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "27f38a4bb6f8",
        _type: "block",
        children: [
          {
            _key: "887d3a73811a0",
            _type: "span",
            marks: [],
            text: "I designed and implemented this project for people like me who want to try different resources during learning and development for a wider view of others people's works. Sometimes we bookmarked useful things and we forget where we put the link or we may forget the name. I think this project is going to solve the problem.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "c7ccfd2a37d6",
        _type: "block",
        children: [
          {
            _key: "ff9feaffcf240",
            _type: "span",
            marks: [],
            text: 'First of all, Domatio δωμάτιο (do̱mátio) is derived from Greek and it is "Room" in English. According to this project, Domatio is a room of valuable resources for developers, programmers, and UIUX designers.\n\n🔸The main feature of this project is collecting websites and resources into categories. You can search for websites in collections so that you will find your desired and appropriate website in a short time.\n\n🔸A search box is a significant role in this project which has a feature for keyword searching. For example, if you search for "programming", the result will be related to the keyword "programming". If you are designing a webpage and it comes to adding a background image or texture, you can just type "background" and there will be some resources for backgrounds.\n\n🔸The target audience of this project is including Myanmar, you can see some local resources and staff. Technologies and concepts used in this project are simple since it was intended to build a lightweight project when I started learning React.js.\n\n🔸Domatio is a reboot version of WebToolsRoom ',
          },
          {
            _key: "ff9feaffcf241",
            _type: "span",
            marks: ["8dfc5060a14f"],
            text: "https://lnkd.in/ghHjGgq8",
          },
          {
            _key: "ff9feaffcf242",
            _type: "span",
            marks: [],
            text: " (a project built in 2020) and I developed it in late 2021. Due to some situations, now I got a chance to present it in front of you.\n\n🔸For data maintenance, I use only a JSON file and manually enter the data. Data entry is the most time-consuming part of this project. I care about every resource being in a right place to help reduce user time on website hunting. I might use a CMS to maintain the data in the future.\n\n🔸From the users' perspective, I would recommend using the website on large screens like laptops and desktops for more content to be displayed. You may think it has a weak point on the mobile screens cause of less data presentation.\n\nI have a plan for adding more data and if you have any suggestions for data and categories, feel free to contact me.",
          },
        ],
        markDefs: [
          {
            _key: "8dfc5060a14f",
            _type: "link",
            href: "https://lnkd.in/ghHjGgq8",
          },
        ],
        style: "normal",
      },
      {
        _key: "7018680f2f74",
        _type: "block",
        children: [
          {
            _key: "c9fc41f09f41",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "b0170e65e004",
        _type: "block",
        children: [
          {
            _key: "ae2dc4e9014b",
            _type: "span",
            marks: ["strong"],
            text: "GitHub Repo -",
          },
          {
            _key: "39dce0ae390d",
            _type: "span",
            marks: [],
            text: " ",
          },
          {
            _key: "3d634e80d409",
            _type: "span",
            marks: ["code", "ccd50c1445c5"],
            text: "https://github.com/T-N9/domatio-react",
          },
        ],
        markDefs: [
          {
            _key: "ccd50c1445c5",
            _type: "link",
            href: "https://github.com/T-N9/domatio-react",
          },
        ],
        style: "normal",
      },
    ],
    icon: "code-slash",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-1b92970641adee07bf2a664004a724099916beb7-1388x898-webp",
        _type: "reference",
      },
    },
    introduction: [
      {
        _key: "b55f6cd2c7d6",
        _type: "block",
        children: [
          {
            _key: "e48dd93df5840",
            _type: "span",
            marks: [],
            text: "It is time-consuming when you have to search for a resource and cannot find one. ",
          },
          {
            _key: "4021ffcecc74",
            _type: "span",
            marks: ["strong"],
            text: "Domatio",
          },
          {
            _key: "91a236e51811",
            _type: "span",
            marks: [],
            text: " is here to help you find your resources for design projects, web projects, or learning programming. It has different categories and assets to search for faster and apply them in your projects.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    logo: {
      _type: "image",
      asset: {
        _ref: "image-e26ad136ebdd5c812eaf9456cc5eed3c38b412a6-1080x300-png",
        _type: "reference",
      },
    },
    mockup: {
      _type: "image",
      asset: {
        _ref: "image-159c3a96be0684ad86e0148623c5b49f99e289d8-1700x1100-png",
        _type: "reference",
      },
    },
    mockup_d: {
      _type: "image",
      asset: {
        _ref: "image-87e16a1d4dd5b2faa653fe13cb79af125c83941a-738x576-png",
        _type: "reference",
      },
    },
    order: 1,
    pandp: [
      {
        _key: "46e4dc37c6f4",
        _type: "block",
        children: [
          {
            _key: "3f376bdbea920",
            _type: "span",
            marks: [],
            text: "The Data",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "f6f102a21bf3",
        _type: "block",
        children: [
          {
            _key: "53f0ff05f66c",
            _type: "span",
            marks: [],
            text: "Firstly, I prepared and collected data from various websites to build a resourceful tool. And I categorized and formatted the data in a JSON document for development purposes. I mainly focus on the data because I want my users to be productive and helpful using Domatio. Users can filter the data by keywords, tags, or inputted text.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "218280727989",
        _type: "block",
        children: [
          {
            _key: "9c4317360d84",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "168dbbbec56e",
        _type: "block",
        children: [
          {
            _key: "adc89310817e",
            _type: "span",
            marks: [],
            text: "What are the techs?",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "56ea7d17379c",
        _type: "block",
        children: [
          {
            _key: "ca70361c5f12",
            _type: "span",
            marks: [],
            text: "Front-end - ",
          },
          {
            _key: "085e7acb6900",
            _type: "span",
            marks: ["47e2e0c87ce1"],
            text: "React",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "47e2e0c87ce1",
            _type: "link",
            href: "https://reactjs.org/",
          },
        ],
        style: "normal",
      },
      {
        _key: "3339524843e5",
        _type: "block",
        children: [
          {
            _key: "909c9c9ea88f",
            _type: "span",
            marks: [],
            text: "Styling - ",
          },
          {
            _key: "bba4e3d10e8c",
            _type: "span",
            marks: ["f4c11e4b9071"],
            text: "SCSS",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "f4c11e4b9071",
            _type: "link",
            href: "https://sass-lang.com/",
          },
        ],
        style: "normal",
      },
      {
        _key: "2eab3f7cfe15",
        _type: "block",
        children: [
          {
            _key: "17bbe73a39de",
            _type: "span",
            marks: [],
            text: "Stage management - ",
          },
          {
            _key: "5a822806545e",
            _type: "span",
            marks: ["6fff75a37c66"],
            text: "Context",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "6fff75a37c66",
            _type: "link",
            href: "https://reactjs.org/docs/context.html",
          },
        ],
        style: "normal",
      },
      {
        _key: "1794287f09ce",
        _type: "block",
        children: [
          {
            _key: "1fe13705e52a",
            _type: "span",
            marks: [],
            text: "Icons -",
          },
          {
            _key: "7417de062865",
            _type: "span",
            marks: ["d90fc7ebb75e"],
            text: " Line icons",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "d90fc7ebb75e",
            _type: "link",
            href: "https://lineicons.com/",
          },
        ],
        style: "normal",
      },
      {
        _key: "f77c077f2ec8",
        _type: "block",
        children: [
          {
            _key: "40189c9b261e",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "bb844a38450a",
        _type: "block",
        children: [
          {
            _key: "9a4faf2b54d6",
            _type: "span",
            marks: [],
            text: "Operational Requirements",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "0881eb393ee8",
        _type: "block",
        children: [
          {
            _key: "29a665d60ce0",
            _type: "span",
            marks: [],
            text: "Data Collection",
          },
        ],
        level: 1,
        listItem: "number",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "b632dd57ee5b",
        _type: "block",
        children: [
          {
            _key: "88c43e39a3a4",
            _type: "span",
            marks: [],
            text: "Data Specification",
          },
        ],
        level: 1,
        listItem: "number",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "7ec0a36e4fe9",
        _type: "block",
        children: [
          {
            _key: "f6a4b1c71679",
            _type: "span",
            marks: [],
            text: "I/O Information",
          },
        ],
        level: 1,
        listItem: "number",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "cdcd096fe157",
        _type: "block",
        children: [
          {
            _key: "001050e23606",
            _type: "span",
            marks: [],
            text: "Single Page Application",
          },
        ],
        level: 1,
        listItem: "number",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "414a5b5798e4",
        _type: "block",
        children: [
          {
            _key: "41dfb2306e9a",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "238238067e74",
        _type: "block",
        children: [
          {
            _key: "3fcdb37e108b",
            _type: "span",
            marks: [],
            text: "Functional Requirements",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "1fa5424238de",
        _type: "block",
        children: [
          {
            _key: "df7c6c713503",
            _type: "span",
            marks: [],
            text: "Data Research ",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "2b3f25258dec",
        _type: "block",
        children: [
          {
            _key: "95d4f15cb482",
            _type: "span",
            marks: [],
            text: "Categorized Information",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "5e1f9bb81f20",
        _type: "block",
        children: [
          {
            _key: "ea93af98ffaa",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "e8e1db6bd8c0",
        _type: "block",
        children: [
          {
            _key: "9324ece4d601",
            _type: "span",
            marks: [],
            text: "Non-functional Requirements",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "639824f09b13",
        _type: "block",
        children: [
          {
            _key: "74ae445f4768",
            _type: "span",
            marks: [],
            text: "Efficiency - Live searching ",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "9f1d34ba15c0",
        _type: "block",
        children: [
          {
            _key: "f870fd77805c",
            _type: "span",
            marks: [],
            text: "Usability - Simple Data Presentation",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "f5037a2c1c94",
        _type: "block",
        children: [
          {
            _key: "b6fb86317e96",
            _type: "span",
            marks: [],
            text: "Maintainability - Updating Data",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "72c33278c650",
        _type: "block",
        children: [
          {
            _key: "8344ac98710b",
            _type: "span",
            marks: [],
            text: "Development - Front-end developement",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "7f943cdfc934",
        _type: "block",
        children: [
          {
            _key: "6ec86aaac342",
            _type: "span",
            marks: [],
            text: "Portablity - Responsive design",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
    ],
    period: "late 2021",
    result: [
      {
        _key: "2de12a15499a",
        _type: "block",
        children: [
          {
            _key: "fe09955f6ce00",
            _type: "span",
            marks: [],
            text: "Easy to use",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "ffd5ddbc0af4",
        _type: "block",
        children: [
          {
            _key: "36dbb6ef5924",
            _type: "span",
            marks: [],
            text: "Reduce browsing time",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "6006d60f353c",
        _type: "block",
        children: [
          {
            _key: "dbde5b0b10df",
            _type: "span",
            marks: [],
            text: "Brand identity",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "ea1aa7a9ea49",
        _type: "block",
        children: [
          {
            _key: "e122d8da68c20",
            _type: "span",
            marks: [],
            text: "This project is helping targeted learners, designers, and developers to hunt products and tools in a short time.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    role: "front-end",
    slug: {
      _type: "slug",
      current: "domatio",
    },
    status: "production",
    title: "Domatio",
    type: "personal",
    typo: {
      _type: "image",
      asset: {
        _ref: "image-26f50f154cf6dd80cf4853b6f9a27d12a7be6d05-1080x600-png",
        _type: "reference",
      },
    },
    url: "https://domatio.tenyain.com/",
  },
  {
    _createdAt: "2022-02-26T06:49:45Z",
    _id: "12a9bccc-7a57-4966-a688-abf02280f04b",
    _rev: "lhoXF04OR35CGYtnFdUpuG",
    _type: "projects",
    _updatedAt: "2022-11-30T13:20:44Z",
    category: "front-end",
    colors: [
      "#278EA5,Jelly Bean",
      "#1F4287,Bay of Many",
      "#21E6C1,Java",
      "#071E3D,Deep Cove",
      "#1C2A30, Mirage",
    ],
    description: "TMDB alternative website to view live cinematic information.",
    designing: [
      {
        _key: "4e6536f12f86",
        _type: "block",
        children: [
          {
            _key: "01e650ee28ea0",
            _type: "span",
            marks: [],
            text: "CINE is fully responsive across different device ratios. I have tried my best to design user interfaces and test them in Figma. I used material design components and icons to deliver a better experience when interacting.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    development: [
      {
        _key: "59ea53d8fb0f",
        _type: "block",
        children: [
          {
            _key: "8e0330296413",
            _type: "span",
            marks: [],
            text: "This is my recent project and I am currently working on more features and a better user experience. As a front-end web development trainee, I have to focus on working with many components and data flow across the app. Especially React.js is a major technology for this project and it consists of data fetching from different APIs to reach the project goal. ",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "e8238c484bb1",
        _type: "block",
        children: [
          {
            _key: "ff7664300624",
            _type: "span",
            marks: [],
            text: "As many front-end developers and UI/UX designers are sharping their skills by creating cinematic design and development projects, I considered outputting one from a different perspective.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    icon: "code-slash",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-574db63144a36ed5370103c1a02080bd4f7aa8bd-1328x760-webp",
        _type: "reference",
      },
    },
    introduction: [
      {
        _key: "cd4b5318a74e",
        _type: "block",
        children: [
          {
            _key: "5fde60cb3ad5",
            _type: "span",
            marks: [],
            text: "CINE will provide you with cinematic information with modern UI. You can download various torrent files of movies. It has many features to deliver the best experience using a cinematic website. ",
          },
          {
            _key: "2d3c6a0f18da",
            _type: "span",
            marks: ["strong"],
            text: "React",
          },
          {
            _key: "883769dc96c8",
            _type: "span",
            marks: [],
            text: " is used to build this project, ",
          },
          {
            _key: "d9568d00d22a",
            _type: "span",
            marks: ["strong", "45275546f82c", "underline"],
            text: "TMDB",
          },
          {
            _key: "34c126dbf660",
            _type: "span",
            marks: [],
            text: " and ",
          },
          {
            _key: "6c4bf1073954",
            _type: "span",
            marks: ["strong", "underline", "815f0f8d255c"],
            text: "YTS",
          },
          {
            _key: "3f4caf9b4ae2",
            _type: "span",
            marks: [],
            text: " APIs are providing its information.",
          },
        ],
        markDefs: [
          {
            _key: "45275546f82c",
            _type: "link",
            href: "https://developers.themoviedb.org/3",
          },
          {
            _key: "815f0f8d255c",
            _type: "link",
            href: "https://yts.torrentbay.to/api",
          },
        ],
        style: "normal",
      },
    ],
    logo: {
      _type: "image",
      asset: {
        _ref: "image-8522260f49643e878596b0ae6f5cb7c51ddf314f-4320x1200-png",
        _type: "reference",
      },
    },
    mockup: {
      _type: "image",
      asset: {
        _ref: "image-a3ac4bfe36071899d8cf0c18a3e8f8ed33d1a20c-1700x1440-png",
        _type: "reference",
      },
    },
    mockup_d: {
      _type: "image",
      asset: {
        _ref: "image-2bf24f44c9383a1ce0b6b2323a847409cf100d09-2160x1300-png",
        _type: "reference",
      },
    },
    order: 2,
    pandp: [
      {
        _key: "40ee6d0566b5",
        _type: "block",
        children: [
          {
            _key: "690a3b33cd6b",
            _type: "span",
            marks: [],
            text: "Cinematic websites",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "dba5cc1af0ee",
        _type: "block",
        children: [
          {
            _key: "09d2e902bee5",
            _type: "span",
            marks: [],
            text: "I studied many cinematic sources to inspire and how they maintain a good quality providing information to users. Websites like ",
          },
          {
            _key: "635d90678c0e",
            _type: "span",
            marks: ["ae759ccc41b5", "strong"],
            text: "IMDB",
          },
          {
            _key: "ced5431400b2",
            _type: "span",
            marks: [],
            text: ", ",
          },
          {
            _key: "4d713ede1638",
            _type: "span",
            marks: ["c3ee68b7d3ae", "strong"],
            text: "TMDB",
          },
          {
            _key: "4e4f0444c393",
            _type: "span",
            marks: [],
            text: ", and one of the famous torrent sites such as ",
          },
          {
            _key: "3488efe373e7",
            _type: "span",
            marks: ["9c12acffb3f1", "strong"],
            text: "YTS.am",
          },
          {
            _key: "9c967e9eddd3",
            _type: "span",
            marks: [],
            text: " were the main websites that I used to learn both of their features and UX.",
          },
        ],
        markDefs: [
          {
            _key: "ae759ccc41b5",
            _type: "link",
            href: "https://www.imdb.com/",
          },
          {
            _key: "c3ee68b7d3ae",
            _type: "link",
            href: "https://www.themoviedb.org/",
          },
          {
            _key: "9c12acffb3f1",
            _type: "link",
            href: "https://yts.mx/",
          },
        ],
        style: "normal",
      },
      {
        _key: "6f5afded340f",
        _type: "block",
        children: [
          {
            _key: "4ea8ae03f55c",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "246785ad6fb1",
        _type: "block",
        children: [
          {
            _key: "90d08f102d9a",
            _type: "span",
            marks: [],
            text: "What are the techs?",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "8bec00140a8a",
        _type: "block",
        children: [
          {
            _key: "027abdf13b3c",
            _type: "span",
            marks: [],
            text: "React (v-1.0)",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "1ed05ce138f5",
        _type: "block",
        children: [
          {
            _key: "f8facd62a66c",
            _type: "span",
            marks: [],
            text: "Next.Js (v-1.1)",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "26b5be794d6b",
        _type: "block",
        children: [
          {
            _key: "7d02f3e9c3ee",
            _type: "span",
            marks: [],
            text: "Redux Toolkit",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "a7706c3f01d8",
        _type: "block",
        children: [
          {
            _key: "0826535acab7",
            _type: "span",
            marks: [],
            text: "Redux Toolkit Query (v-1.1)",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "2d144f36f537",
        _type: "block",
        children: [
          {
            _key: "776d944b63fa",
            _type: "span",
            marks: [],
            text: "SCSS modules (v-1.0)",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "0f77d5b1df31",
        _type: "block",
        children: [
          {
            _key: "3f2a913f8dc6",
            _type: "span",
            marks: [],
            text: "TailwindCSS (v-1.1)",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "5486d30ad393",
        _type: "block",
        children: [
          {
            _key: "577ac0cef561",
            _type: "span",
            marks: [],
            text: "MUI icons",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "9a500011a0d4",
        _type: "block",
        children: [
          {
            _key: "4139cecdd01c",
            _type: "span",
            marks: [],
            text: "MUI components",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "8d4212e5cb0a",
        _type: "block",
        children: [
          {
            _key: "0088beba603d",
            _type: "span",
            marks: [],
            text: "TMDB, YTS APIs",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "a7a74b385b96",
        _type: "block",
        children: [
          {
            _key: "21fdb7c476b2",
            _type: "span",
            marks: [],
            text: "Note - Current Version : v-1.1",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    period: "Jan 2022 - present",
    role: "front-end",
    slug: {
      _type: "slug",
      current: "cine",
    },
    status: "developing",
    title: "CINE",
    type: "personal",
    typo: {
      _type: "image",
      asset: {
        _ref: "image-f3309e9c983ce00f85601c0ecc06fd35d2520ca9-4320x2400-png",
        _type: "reference",
      },
    },
    url: "https://cine.tenyain.com/",
  },
  {
    _createdAt: "2022-02-24T08:58:09Z",
    _id: "6d268f81-0ff3-4ed5-81c5-18e97aaab3dc",
    _rev: "z7EiK8inwybcbhSAyMi62i",
    _type: "projects",
    _updatedAt: "2022-10-05T15:20:29Z",
    category: "front-end",
    description:
      "Landing page UI design and implementation for an online learning organization.",
    icon: "code-slash",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-460f2139ea8cf05baf6a68d4792306c6dd82684c-1356x873-webp",
        _type: "reference",
      },
    },
    order: 3,
    period: "Jan 2022",
    role: "UI Designer",
    slug: {
      _type: "slug",
      current: "wisdom-school",
    },
    status: "production",
    title: "Wisdom School",
    type: "volunteer",
    url: "https://wisdom-next.vercel.app/",
  },
  {
    _createdAt: "2022-02-24T09:05:49Z",
    _id: "eef2ab83-7a94-4b54-8274-8ba0ad75855b",
    _rev: "lhoXF04OR35CGYtnFdUppb",
    _type: "projects",
    _updatedAt: "2022-10-05T15:20:29Z",
    category: "javascript",
    description:
      "A JavaScript practical quiz application for general knowledge.",
    icon: "code",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-d38611a171239f0c3baa1b03be9f76f446b81c9c-1384x898-webp",
        _type: "reference",
      },
    },
    order: 4,
    period: "Mid 2021",
    role: "front-end developer",
    slug: {
      _type: "slug",
      current: "little-polymath",
    },
    status: "production",
    title: "Little Polymath",
    type: "pratical",
    url: "https://t-n9.github.io/little-polymath-frontend/lp-root/",
  },
  {
    _createdAt: "2022-02-24T09:09:30Z",
    _id: "e55c39c3-433b-4e94-a066-f42dea019642",
    _rev: "0rD6Phxg3duzic15oGnGj1",
    _type: "projects",
    _updatedAt: "2022-12-04T14:57:49Z",
    category: "design",
    challenge: [
      {
        _key: "734343c520bf",
        _type: "block",
        children: [
          {
            _key: "8aa6c3664da60",
            _type: "span",
            marks: [],
            text: "User Interaction",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "be372839927f",
        _type: "block",
        children: [
          {
            _key: "e6513b5f8c9d",
            _type: "span",
            marks: [],
            text: "Personal Branding",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "07af5c0e341a",
        _type: "block",
        children: [
          {
            _key: "3067bbc3cc75",
            _type: "span",
            marks: [],
            text: "Search Engine Optimization",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "1cc7c29bd61c",
        _type: "block",
        children: [
          {
            _key: "b02d3c10a6a9",
            _type: "span",
            marks: [],
            text: "Portfolio projectဖြစ်တဲ့အတွက် အရေးအကြီးဆုံး အချက်က ကျွန်တော်တို့ပေးချင်တဲ့ informationကို ထိထိရောက်ရောက် readerဆီပေးနိုင်ရပါမယ်။ မိမိရဲ့ personality နဲ့ brandကိုလည်း ထင်ပေါ်အောင် လုပ်ဆောင်ပေးရင် above average ဖြစ်နေမှာ ဖြစ်ပါတယ်။",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    colors: [
      "#1192D3,Cerulean",
      "#3A4856,Oxford Blue",
      "#E5E5E5,Mercury",
      "#2FE0AC,Turquoise",
    ],
    conclusion: [
      {
        _key: "1f5d7bdd0631",
        _type: "block",
        children: [
          {
            _key: "09447d8c65e0",
            _type: "span",
            marks: [],
            text: "ကျွန်တော့်ရဲ့ portfolioကို ဝင်ရောက်ကြည့်ရှုတဲ့အခါ လိုအပ်နေတဲ့အပိုင်းတွေ၊ အကြံပေးချင်တာများ ရှိလျှင် ဝေဖန်ပေးစေလိုပါတယ်။ ဖတ်ရှုပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်ခင်ဗျာ။",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "02b8d3e76e1f",
        _type: "block",
        children: [
          {
            _key: "37cb6947f973",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "b0d96729e28d",
        _type: "block",
        children: [
          {
            _key: "937a94c57164",
            _type: "span",
            marks: [],
            text: "🔹Thank you",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "d7fce8b524a6",
        _type: "block",
        children: [
          {
            _key: "fcec1b50d9820",
            _type: "span",
            marks: [],
            text: "I would like to thank Mr. ",
          },
          {
            _key: "2a6909cae2fa",
            _type: "span",
            marks: ["687aac381286"],
            text: "Jerome Kalumbu",
          },
          {
            _key: "11f07a1cf821",
            _type: "span",
            marks: [],
            text: " who reviewed my portfolio and gave me guidance to improve User Experience of this project. His review process is comprehensible and right on point along with his past experience. Jerome recently launched a book named ",
          },
          {
            _key: "2aa776244608",
            _type: "span",
            marks: ["c80b18519fb3"],
            text: '"Don\'t start with visuals"',
          },
          {
            _key: "b8c9c5a84764",
            _type: "span",
            marks: [],
            text: " and you can also check out for his website review process.",
          },
        ],
        markDefs: [
          {
            _key: "687aac381286",
            _type: "link",
            href: "https://www.jerome-kalumbu.com/",
          },
          {
            _key: "c80b18519fb3",
            _type: "link",
            href: "https://jeromekalumbu.gumroad.com/l/dont-start-with-visuals",
          },
        ],
        style: "normal",
      },
    ],
    description: "Design and build a portfolio project with React.js",
    designing: [
      {
        _key: "12d13c800134",
        _type: "block",
        children: [
          {
            _key: "c9d79745daf90",
            _type: "span",
            marks: [],
            text: "Design prototypeကိုတော့ Figmaကို အသုံးပြုထားတယ်။ Fully prototyping မဟုတ်ဘဲ user interfaceအပိုင်းမှာ အသုံးပြုမည့် colorတွေ၊ illustrationတွေနဲ့ layout တွေကို အကြမ်းအားဖြင့်သာ နေရာချပြီး လုပ်ဆောင်ခဲ့ပါတယ်။ Deviceအများစုမှာလည်း responsiveဖြစ်အောင် ရေးသားထားပါတယ်။ development အစပိုင်းမှာတော့ အတတ်နိုင်ဆုံး simpleဖြစ်ပြီး ရှင်လင်းအောင် လုပ်ဆောင်ခဲ့ပေမယ့် motion objectလေးတွေမပါရင် အမြင်ပျင်းစရာဖြစ်နေလို့ animationလေးတွေကိုလည်း ထည့်သွင်းခဲ့ပါတယ်။ Work pageက animationတွေက customဖြစ်ပြီး တခြား object animationတွေအတွက် ",
          },
          {
            _key: "2352cbf56e73",
            _type: "span",
            marks: ["48463ef31f83"],
            text: "Framer motion",
          },
          {
            _key: "6a8015c055dc",
            _type: "span",
            marks: [],
            text: "ကို အသုံးပြုထားပါတယ်။",
          },
        ],
        markDefs: [
          {
            _key: "48463ef31f83",
            _type: "link",
            href: "https://www.framer.com/motion/",
          },
        ],
        style: "normal",
      },
    ],
    development: [
      {
        _key: "13760c378f19",
        _type: "block",
        children: [
          {
            _key: "9da9e8f584a30",
            _type: "span",
            marks: [],
            text: "ကျွန်တော်က အခုလက်ရှိမှာ front-end developementကို ",
          },
          {
            _key: "c419ba10ea2d",
            _type: "span",
            marks: ["423f18538ec2"],
            text: "React.js",
          },
          {
            _key: "4ad9630d4dcc",
            _type: "span",
            marks: [],
            text: " နဲ့လုပ်နေတာကြောင့် portfolioကိုလည်း React.jsနဲ့ဘဲ ရေးဖြစ်ခဲ့ပါတယ်။ ကျွန်တော်က junior levelဖြစ်တာကြောင့် job experience သိပ်မရှိဘဲ personal projectတွေကို အားထားပြီး ကိုယ့်ရဲ့ ideaနဲ့ developmentအပိုင်းကို အလေးပေးချပြချင်တာပါ။ ဒါကြောင့် full-timeဘဲလုပ်လုပ် freelanceဘဲလုပ်လုပ် အဆင်ပြေနိုင်အောင် ကျွန်တော့် portfolio ကို designချပြီး stand outဖြစ်အောင် အတတ်နိုင်ဆုံးစဉ်းစားခဲ့ပါတယ်။ လုပ်ထားတဲ့ personal projectတွေမှာ ကျွန်တော် ဘယ်လိုတွေးခဲ့ပုံ၊ ဘယ်လို techတွေအသုံးပြုခဲ့ပုံ နှင့် design scene ဘယ်လိုရှိခဲ့သလဲ ဆိုတာတွေကို userတွေအနေနဲ့လည်း ဖတ်ရှုအကြံပေးနိုင်အောင် ရည်ရွယ်ထားပါတယ်။",
          },
        ],
        markDefs: [
          {
            _key: "423f18538ec2",
            _type: "link",
            href: "https://reactjs.org/",
          },
        ],
        style: "normal",
      },
      {
        _key: "02eb3763b73f",
        _type: "block",
        children: [
          {
            _key: "0589a3598e44",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "3d59865d2d17",
        _type: "block",
        children: [
          {
            _key: "55f7dd8e1b010",
            _type: "span",
            marks: [],
            text: "🔸Theming\nယနေ့ခေတ် UI trendတခုဖြစ်တဲ့ Light - Dark modeဟာဆိုရင် websiteတော်တော်များများမှာ ရရှိလို့နေပါပြီ။ Color scheme နှစ်ခုကို ကစားရတာဖြစ်တဲ့အတွက် modeနှစ်ခုစလုံးမှာ contract မျှတဖို့ ဒီProjectမှာ အတတ်နိုင်ဆုံးရေးသားထားပါတယ်။",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "19790b266cbb",
        _type: "block",
        children: [
          {
            _key: "cdafc4295005",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "df1a0fccfb23",
        _type: "block",
        children: [
          {
            _key: "1dc6040c6ce00",
            _type: "span",
            marks: [],
            text: "🔸Case Study\nUIUX porfolio တွေနဲ့ developmentပိုင်းဆိုင်ရာ porfolioတွေမှာ case study တွေဟာ အရေးကြီးတဲ့ အပိုင်းမှာပါဝင်နေပါတယ်။ Project တခုပြီးမြောက်အောင် ဘယ်လိုပြင်ဆင်ခဲ့တယ်၊ ဘယ်လို requirementတွေကောက်ခဲ့တယ်၊ ဘယ်လိုနည်းနဲ့ project goal ကို approach လုပ်သလဲဆိုတာကို မိမိ customer ( သို့ ) employerတွေကို ရှင်းလင်းဖော်ပြခြင်းဖြစ်ပါတယ်။ Internationalက developerတွေ ၊ designerတွေ နဲ့ digital marketerတွေက သူတို့ရဲ့ porfolioတွေမှာ ဒီလိုနည်းနဲ့ ကိုယ့်ရဲ့ idea and thinking ကို deliverလုပ်ကြပြီး branding လုပ်ကြပါတယ်။",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "95b64c9e169c",
        _type: "block",
        children: [
          {
            _key: "1384ce8c9632",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "f464401d23f1",
        _type: "block",
        children: [
          {
            _key: "c4f3be7092c20",
            _type: "span",
            marks: [],
            text: "🔸Branding\nMarketing၊ personal development ၊ career development စတဲ့ သင်တန်းတွေ၊ professionalsတွေကနေ Self Branding ၊ Persoanl Branding ဆိုတဲ့ topic တွေကို ကျွန်တော်တို့ကြားဖူးကြမှာပါ။ Quality ဘယ်လောက်ဘဲကောင်းကောင်း branding မလုပ်နိုင်ရင် လေနှင်ရာ ယိမ်းရဖို့များတယ်ဆိုတာပါဘဲ။ ဒီအချက်က Freelancing နဲ့ social organizationတွေနဲ့ ဆက်စပ်ပြီး အပြိုင်အဆိုင် အလုပ်လုပ်ရတော့မယ်ဆိုရင် အရမ်းသိသာတဲ့ အချက်အလက်ဖြစ်ပါတယ်။ ဒါကြောင့် ဒီporfolio ရဲ့ contentတွေမှာ branding experience တချို့ကို ထည့်သွင်းထားပါတယ်။",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "54beb9da799e",
        _type: "block",
        children: [
          {
            _key: "b5a09dca2109",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "3ab6f5255fee",
        _type: "block",
        children: [
          {
            _key: "630f6ae89ba30",
            _type: "span",
            marks: [],
            text: "🔸Content Management\nPortfolioတခုမှာ dynamic content (eg: projects , blogs) တွေကို ထည့်ချင်လာပြီဆိုရင် Third Party CMS တခုခုကိုအသုံးပြုခြင်းက အလွယ်ကူဆုံးနည်းလမ်းတခုပါ။ အကယ်၍ Backend ပိုင်းပါ implementလုပ်နိုင်ရင်တော့ project scopeကျယ်ပြီး အကောင်းဆုံးဖြစ်မှာပါ။ ကျွန်တော်ကတော့ ဒီprojectမှာ ",
          },
          {
            _key: "021a146b9c8c",
            _type: "span",
            marks: ["99e7b1886666"],
            text: "Sanity.io",
          },
          {
            _key: "16d81f6b44ff",
            _type: "span",
            marks: [],
            text: " CMS ကို အသုံးပြုထားပါတယ်။",
          },
        ],
        markDefs: [
          {
            _key: "99e7b1886666",
            _type: "link",
            href: "https://www.sanity.io/",
          },
        ],
        style: "normal",
      },
      {
        _key: "b105ca5af6db",
        _type: "block",
        children: [
          {
            _key: "2d00ff8121f1",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "da059127d326",
        _type: "block",
        children: [
          {
            _key: "bd34648479be",
            _type: "span",
            marks: ["strong"],
            text: "GitHub Repo -",
          },
          {
            _key: "ea3aaf289268",
            _type: "span",
            marks: [],
            text: " ",
          },
          {
            _key: "e125d1a06800",
            _type: "span",
            marks: ["code", "6a976c34bc2c"],
            text: "https://github.com/T-N9/tn-porfolio-frontend",
          },
        ],
        markDefs: [
          {
            _key: "6a976c34bc2c",
            _type: "link",
            href: "https://github.com/T-N9/tn-porfolio-frontend",
          },
        ],
        style: "normal",
      },
    ],
    icon: "color-bucket",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-2943a145fa220064231341abeb18ea836aba783f-1348x780-webp",
        _type: "reference",
      },
    },
    introduction: [
      {
        _key: "60ae6ae79312",
        _type: "block",
        children: [
          {
            _key: "c8d6f5120acf0",
            _type: "span",
            marks: [],
            text: "ကျွန်တော်တို့ web development နှင့် programming နယ်ပယ်မှာ လုပ်ငန်းခွင်ဝင်တော့မယ်ဆိုရင် challenge တခု (သို့မဟုတ်) ကိုယ့်ကိုကိုယ်ဆန်းစစ်စရာတခု ရှိလာတတ်ပါတယ်။ အဲ့တာကတော့ ကျွန်တော်တို့ လုပ်ကိုင်မယ့်အပိုင်း နဲ့သက်ဆိုင်တဲ့ skill, experience နှင့် project တွေကို ကောင်းကောင်းမွန်မွန်ချပြနိုင်မယ့် portfolio တခု ရှိပြီလား ဆိုတာပါဘဲ။ ယနေ့ခေတ်လို Digital era မှာ ကိုယ့်ရဲ့ businessကို websiteတွေ၊ digital platform တွေမှာ promote လုပ်လာကြပါပြီ။ ကျွန်တော်တို့ရဲ့ စျေးကွက် နဲ့ scopeကို international အထိ ချဲ့ထွင်လာကြတဲ့အခါမှာ မိမိပေးမယ့် service နဲ့ မိမိရဲ့ အရည်အချင်းဟာ targeted customer တွေရဲ့မျက်လုံးမှာ ကောင်းမွန်စွာ presentation ပြနိုင်ဖို့လိုအပ်လာပါတယ်။ အခုဆိုရင် photographerတွေ graphic designerတွေလည်း ကိုယ်ပိုင် websiteနဲ့ serviceတွေကို promoteလုပ်လာကြပါပြီ။",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    logo: {
      _type: "image",
      asset: {
        _ref: "image-6a3509c94db8c1bfdb82fefffe2fa0d337d41fd1-2160x600-webp",
        _type: "reference",
      },
    },
    mockup: {
      _type: "image",
      asset: {
        _ref: "image-95bee833577acd0dda0038e9240035a3f736a703-2160x1074-webp",
        _type: "reference",
      },
    },
    mockup_d: {
      _type: "image",
      asset: {
        _ref: "image-1f86c49462ee7fbf854300ceb4655d00944c9b30-2476x1644-png",
        _type: "reference",
      },
    },
    order: 5,
    pandp: [
      {
        _key: "7238673dd85a",
        _type: "block",
        children: [
          {
            _key: "4a10a02bb4ce0",
            _type: "span",
            marks: [],
            text: "Portfolio Research",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "b40a25bb8310",
        _type: "block",
        children: [
          {
            _key: "622c1f8ed6280",
            _type: "span",
            marks: [],
            text: "Front-end developmentအပိုင်းကို specializeလုပ်နေပေမယ့် UIUX အပိုင်းကို အတတ်နိုင်ဆုံးကြိုးစားပြီးလုပ်ကြည့်ပါတယ်။ UIUXကို တစိုက်မတ်မတ် မလေ့လာဖူးတာကြောင့် design inspireဖြစ်အောင် နှင့် စဉ်းစားတတ်လာအောင် ကိုယ်လုပ်ဆောင်နေတဲ့ applicationနဲ့ ပက်သက်ပြီး တခြား developerတွေ designerတွေ ရဲ့ လုပ်ဆောင်ပုံတွေကို လေ့လာပါတယ်။ စု - တု - ပြု ဆိုတဲ့အတိုင်း အချက်အလက်တွေ articleတွေကို စုစည်းဖတ်ရှုခဲ့ပါတယ်။ ရရှိလာတဲ့ အသိသညာ နဲ့ ကျွန်တော့်အနေနဲ့ ဘယ်လိုမျိုး designချရမလဲ၊ တုပ ပြီးလုပ်ဆောင်ရင်လည်း ဘယ်လို ပြန်ပြီးကွဲထွက်ရမလဲဆိုတာ လေ့လာခဲ့ပါတယ်။ နောက်ဆုံးမှာတော့ ကိုယ်ပိုင် ပြုလုပ်ခြင်းအပိုင်းကို စတင်လုပ်ဆောင်ခဲ့ပါတယ်။",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "46848db06814",
        _type: "block",
        children: [
          {
            _key: "37b26ed185ab0",
            _type: "span",
            marks: [],
            text: "",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "5f4cc35fb3a7",
        _type: "block",
        children: [
          {
            _key: "c44758d39cb30",
            _type: "span",
            marks: [],
            text: "What are the techs?",
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "0bb8b90a4ec8",
        _type: "block",
        children: [
          {
            _key: "350b08ce52550",
            _type: "span",
            marks: [],
            text: "Front-end - ",
          },
          {
            _key: "a3ad374f5ade",
            _type: "span",
            marks: ["f81506e12b1b"],
            text: "React",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "f81506e12b1b",
            _type: "link",
            href: "https://reactjs.org/",
          },
        ],
        style: "normal",
      },
      {
        _key: "7a35f7fd92a5",
        _type: "block",
        children: [
          {
            _key: "f812952af5e90",
            _type: "span",
            marks: [],
            text: "Stage management - ",
          },
          {
            _key: "3291ec646d82",
            _type: "span",
            marks: ["cb5821a81bc2"],
            text: "Redux",
          },
          {
            _key: "b5cc2bf27dc9",
            _type: "span",
            marks: [],
            text: " & ",
          },
          {
            _key: "c2f86211c8a0",
            _type: "span",
            marks: ["6d49eb4340ce"],
            text: "Context",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "cb5821a81bc2",
            _type: "link",
            href: "https://redux.js.org/",
          },
          {
            _key: "6d49eb4340ce",
            _type: "link",
            href: "https://reactjs.org/docs/context.html",
          },
        ],
        style: "normal",
      },
      {
        _key: "1198f6378122",
        _type: "block",
        children: [
          {
            _key: "3b1ffd2f26600",
            _type: "span",
            marks: [],
            text: "Routing - ",
          },
          {
            _key: "e4c952465929",
            _type: "span",
            marks: ["a2965bd4b125"],
            text: "React router",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "a2965bd4b125",
            _type: "link",
            href: "https://reactrouter.com/",
          },
        ],
        style: "normal",
      },
      {
        _key: "c99057f1f43f",
        _type: "block",
        children: [
          {
            _key: "1abe35f339230",
            _type: "span",
            marks: [],
            text: "Styling - ",
          },
          {
            _key: "ba079d8f895b",
            _type: "span",
            marks: ["5d26d4372e00"],
            text: "SCSS",
          },
          {
            _key: "8d7f0788f751",
            _type: "span",
            marks: [],
            text: " modules",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "5d26d4372e00",
            _type: "link",
            href: "https://sass-lang.com/",
          },
        ],
        style: "normal",
      },
      {
        _key: "9102c78f9759",
        _type: "block",
        children: [
          {
            _key: "acb6662e3aa00",
            _type: "span",
            marks: [],
            text: "Content management - ",
          },
          {
            _key: "607f16c19a91",
            _type: "span",
            marks: ["064d431d5855"],
            text: "Sanity CMS",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "064d431d5855",
            _type: "link",
            href: "https://www.sanity.io/",
          },
        ],
        style: "normal",
      },
      {
        _key: "7875dc5edf05",
        _type: "block",
        children: [
          {
            _key: "99279374e3580",
            _type: "span",
            marks: [],
            text: "Icons - ",
          },
          {
            _key: "cff2515a5388",
            _type: "span",
            marks: ["8dca599baa19"],
            text: "CSS.gg",
          },
          {
            _key: "75cd92d9ec55",
            _type: "span",
            marks: [],
            text: " icons",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [
          {
            _key: "8dca599baa19",
            _type: "link",
            href: "https://css.gg/",
          },
        ],
        style: "normal",
      },
      {
        _key: "5b74c582e85b",
        _type: "block",
        children: [
          {
            _key: "2649209a22fe0",
            _type: "span",
            marks: [],
            text: "React ကိုအဓိကအသုံးပြုထားပြီး stylingအတွက် module structured SCSS, content managementအတွက် Sanityကို အသုံးပြုထားပါတယ်။",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    period: "Jan 2022 - Apr 2022",
    result: [
      {
        _key: "d95c00dbf015",
        _type: "block",
        children: [
          {
            _key: "98edf1bc053c0",
            _type: "span",
            marks: [],
            text: "Created social recognition",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "d43da883f293",
        _type: "block",
        children: [
          {
            _key: "b5c9ea8fb7ba0",
            _type: "span",
            marks: [],
            text: "Readily delivered information",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "1fd414930c42",
        _type: "block",
        children: [
          {
            _key: "54411c1e9bd4",
            _type: "span",
            marks: [],
            text: "Good feedbacks on UX",
          },
        ],
        level: 1,
        listItem: "bullet",
        markDefs: [],
        style: "normal",
      },
      {
        _key: "1167be851d76",
        _type: "block",
        children: [
          {
            _key: "89160a890185",
            _type: "span",
            marks: [],
            text: "ဒီ projectကို publishလုပ်တဲ့အခါ localမှာသာမက internationalက professional တွေနဲ့ connectionတွေရရှိခဲ့ပါတယ်။ Education နဲ့ careerဆိုင်ရာ အခွင့်အလမ်းတွေကိုလည်း ရရှိခဲ့ပါတယ်။",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    role: "front-end",
    slug: {
      _type: "slug",
      current: "my-portfolio",
    },
    status: "in progress",
    title: "My Portfolio",
    type: "personal",
    typo: {
      _type: "image",
      asset: {
        _ref: "image-30805ceb1e4111dcca33f20e0a50b9493d371e24-1080x600-webp",
        _type: "reference",
      },
    },
    url: "https://tenyain.com/",
  },
];
