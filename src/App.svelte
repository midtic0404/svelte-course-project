<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";

    const meetups = [
        {
            id: 'm1',
            title: 'Coding Bootcamp',
            subtitle: 'Learn to code',
            description: 'Experts helps you!',
            imageUrl: 'https://www.codingdojo.com/blog/wp-content/uploads/coding-bootcamps-vs-cs-degrees.png',
            address: '234 Rd',
            contactEmail: 'test@code.com'
        },
        {
            id: 'm2',
            title: 'Swimming Club',
            subtitle: 'swimming is fun',
            description: 'Experts helps you!',
            imageUrl: 'https://www.gotokyo.org/en/spot/1030/images/1030_0840_2_750x503.jpg',
            address: '234 Rd',
            contactEmail: 'swimfun@test.com'
        },
    ]
</script>

<style>
    main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
    <MeetupGrid {meetups} />
</main>