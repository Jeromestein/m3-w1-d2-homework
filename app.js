// Local components registration in Vue instance
const NavMenu = {
    template: '#nav-menu-template',
    props: {
        items: {
            type: Array,
            required: true
        }
    }
};

// Define the Food Image component
Vue.component('food-image', {
    template: '#food-image-template',
    props: {
        image: {
            type: Object,
            required: true
        }
    }
});

// Define the Author Modal component
Vue.component('author-modal', {
    template: '#author-modal-template',
    props: {
        authorData: Object
    },
    mounted() {
        // Add keyboard event listener for Escape key
        document.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
        // Remove event listener when component is destroyed
        document.removeEventListener('keydown', this.handleKeyDown);
    },
    methods: {
        handleKeyDown(e) {
            // Close modal when Escape key is pressed
            if (e.key === 'Escape') {
                this.$emit('close');
            }
        }
    }
});

// Define the BlogPost component
Vue.component('blog-post', {
    template: '#blog-post-template',
    props: ['author', 'date', 'content'],
    data() {
        return {
            profileImage: 'profile.png'
        }
    },
    methods: {
        onProfileClick() {
            // Emit event to parent to show author info
            this.$emit('show-author-info', this.author);
        }
    }
});

// Create Vue instance
new Vue({
    el: '#app',
    components: {
        'nav-menu': NavMenu
    },
    data: {
        // Add navigation items data
        navItems: [
            { text: 'Home', url: '#' },
            { text: 'Recipes', url: '#' },
            { text: 'Lifestyles', url: '#' },
            { text: 'Videos', url: '#' },
            { text: 'About', url: '#' }
        ],
        title: 'Food Blog',
        commentTitle: 'Comments',
        showModal: false,
        selectedAuthor: null,
        featuredImage: {
            src: 'images/chili.jpg',
            alt: 'White Chicken Chili',
            caption: 'Yummy White Chicken Chili'
        },
        authorInfoData: {
            "Brianna": {
                name: "Brianna",
                foodieLevel: "Novice",
                bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!"
            },
            "LINH": {
                name: "LINH",
                foodieLevel: "Newcomer",
                bio: "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time."
            },
            "CATHERINE LEONARDO": {
                name: "CATHERINE LEONARDO",
                foodieLevel: "Mentor",
                bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!"
            },
            "KALI": {
                name: "KALI",
                foodieLevel: "Novice",
                bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!"
            }
        },
        posts: [
            {
                id: 1,
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                content: 'Was amazing! My Walmart didn\'t have coriander in stock and didn\'t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!'
            },
            {
                id: 2,
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                content: 'I just made this soup today and it\'s so tasty! didn\'t have corn at home but still turned out very good. It\'s a winner! I made beef chili for my parents; but since my dad has gout he can\'t eat beef; this white chicken chili is perfect for him. Thank you Lisa!'
            },
            {
                id: 3,
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                content: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I\'ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'
            },
            {
                id: 4,
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                content: 'This recipe is dynamite! My partner usually won\'t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'
            }
        ]
    },
    methods: {
        showAuthorInfo(author) {
            // Show modal with author info
            this.selectedAuthor = this.authorInfoData[author];
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        handleImageClick(image) {
            console.log('Image clicked:', image);
            // 可以在这里添加图片点击的交互，例如显示大图或图片详情
        }
    }
}); 