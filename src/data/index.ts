import airindia from "../assets/images/airindia.png"
import airasia from "../assets/images/airasia.png"
import emirates from "../assets/images/emirates.png"
import indigo from "../assets/images/indigo.png"
import ladakh from "../assets/images/ladakh.jpg"
import goa from "../assets/images/goa.jpg"
import paris from "../assets/images/paris.jpg"
import newyork from "../assets/images/newyork.jpg"
import wallet from "../assets/images/wallet.png"
import connection from "../assets/images/connection.png"
import love from "../assets/images/love.png"
import { destinationType } from "../types"


export const topRatedDestinations: destinationType[] = [
    {
        id: 1,
        image: ladakh,
        title: "Ladakh",
        desc: "fhrf feuhf wewj jfj fh jrfjrn djfj rfjdk ejfijf efjdfe hefrur jhffr",
        price: "$1,599",
        location: "India",
        stars: "5.0"
    },
    {
        id: 2,
        image: paris,
        title: "Paris",
        desc: "fhrf feuhf wewj jfj fh jrfjrn djfj rfjdk ejfijf efjdfe hefrur jhffr",
        price: "$100,000",
        location: "London",
        stars: "5.0"
    },
    {
        id: 3,
        image: newyork,
        title: "New York",
        desc: "fhrf feuhf wewj jfj fh jrfjrn djfj rfjdk ejfijf efjdfe hefrur jhffr",
        price: "$500,000",
        location: "USA",
        stars: "5.0"
    },
    {
        id: 4,
        image: goa,
        title: "Goa",
        desc: "fhrf feuhf wewj jfj fh jrfjrn djfj rfjdk ejfijf efjdfe hefrur jhffr",
        price: "$10,000",
        location: "India",
        stars: "5.0"
    },
];

export const offers = [
    {
        title: "Safe Transactions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed.",
        image: wallet,
    },
    {
        title: "Make connections",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed.",
        image: connection,
    },
    {
        title: "Travel with love",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed.",
        image: love,
    },
];

export const partners =[
    {alt: "Partner1", image: airindia},
    {alt: "Partner2", image: indigo},
    {alt: "Partner3", image: emirates},
    {alt: "Partner4", image: airasia},
];
