// Vue.js Food Blog Application
new Vue({
    el: '#app',
    data: {
        title: 'FOOD BLOG',
        commentTitle: 'COMMENTS',
        featuredImage: {
            src: '/images/chili.jpg',
            alt: 'Spicy Chili',
            caption: 'Delicious homemade chili'
        },
        posts: [
            {
                id: 1,
                author: 'John Doe',
                date: '2024-01-15',
                content: 'This chili recipe is absolutely amazing! The perfect balance of spices and heat. I made it for my family last weekend and they couldn\'t get enough. Highly recommend trying this one!'
            },
            {
                id: 2,
                author: 'Jane Smith',
                date: '2024-01-14',
                content: 'I love how this recipe uses fresh ingredients. The tomatoes and peppers really make a difference. I added some extra garlic and it turned out perfect!'
            },
            {
                id: 3,
                author: 'Mike Johnson',
                date: '2024-01-13',
                content: 'Great recipe! I substituted ground turkey for beef and it was still delicious. The secret is definitely in the spice blend. Will definitely make this again!'
            }
        ],
        navItems: [
            { text: 'Home', url: '#' },
            { text: 'Recipes', url: '#' },
            { text: 'About', url: '#' },
            { text: 'Contact', url: '#' }
        ],
        showModal: false,
        selectedAuthor: null,
        authors: {
            'John Doe': {
                name: 'John Doe',
                foodieLevel: 'Expert',
                bio: 'Passionate home cook with 15 years of experience. Loves experimenting with international cuisines and sharing recipes with the community.'
            },
            'Jane Smith': {
                name: 'Jane Smith',
                foodieLevel: 'Intermediate',
                bio: 'Food blogger and recipe developer. Enjoys creating healthy, family-friendly meals that are both delicious and nutritious.'
            },
            'Mike Johnson': {
                name: 'Mike Johnson',
                foodieLevel: 'Beginner',
                bio: 'New to cooking but enthusiastic about learning. Loves trying new recipes and documenting his culinary journey.'
            }
        }
    },
    methods: {
        handleImageClick(image) {
            console.log('Image clicked:', image);
            // Add any image click functionality here
        },
        showAuthorInfo(author) {
            this.selectedAuthor = this.authors[author];
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.selectedAuthor = null;
        }
    }
});

// Blog Post Component
Vue.component('blog-post', {
    template: '#blog-post-template',
    props: ['author', 'date', 'content'],
    data() {
        return {
            profileImage: '/images/profile.png'
        };
    },
    methods: {
        onProfileClick() {
            this.$emit('show-author-info', this.author);
        }
    }
});

// Author Modal Component
Vue.component('author-modal', {
    template: '#author-modal-template',
    props: ['authorData']
});

// Food Image Component
Vue.component('food-image', {
    template: '#food-image-template',
    props: ['image']
});

// Navigation Menu Component
Vue.component('nav-menu', {
    template: '#nav-menu-template',
    props: ['items']
}); 