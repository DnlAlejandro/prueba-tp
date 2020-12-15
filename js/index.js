var places = [ 
    {
        elemtent: {
            top:  "90px",
            left: "60px"
        },
        information: {
            
            title: "Capsule",
            image: "play.png",
            description: "It is a type of hotel developed in Japan, which features many small bed-sized rooms known as capsules. Capsule hotels provide cheap, basic overnight accommodation for guests who do not require or who cannot afford larger, more expensive rooms offered by more conventional hotels.",
            image: "capsule.png"
        
        }
    },
    {
        elemtent: {
            top:  "145px",
            left: "90px"
        },
        information: {
            title: "Hostel",
            description: "A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. Private rooms may also be available, but the property must offer dormitories to be considered a hostel.",
            image: "hostel.png"
        }
    },
    {
        elemtent: {
            top:  "210px",
            left: "180px"
        },
        information: {
            title: "Cruise",
            description: "Cruise ships are large passenger ships used mainly for vacationing. Unlike ocean liners, which are used for transport, they typically embark on round-trip voyages to various ports-of-call, where passengers may go on tours known as “shore excursions.”",
            image: "cruise.png"
        }
    },
    {
        elemtent: {
            top:  "120px",
            left: "180px"
        },
        information: {
            title: "Boutique Hotel",
            description: "It is a type of hotel developed in Japan, which features many small bed-sized rooms known as capsules. Capsule hotels provide cheap, basic overnight accommodation for guests who do not require or who cannot afford larger, more expensive rooms offered by more conventional hotels.",
            image: "boutique_hotel.png"
        }
    },
    {
        elemtent: {
            top:  "250px",
            left: "140px"
        },
        information: {
            title: "Motel",
            description: "It is a hotel providing travelers with lodging and free parking facilities, typically a roadside hotel having rooms adjacent to an outside parking area or an urban hotel offering parking within the building.",
            image: "motel.png"
        }
    },
    {
        elemtent: {
            top:  "120px",
            left: "220px"
        },
        information: {
            title: "Apartment Hotel",
            description: "A hotel rents furnished apartments or suites suitable for housekeeping, on a weekly or more permanent basis, and usually supplies all hotel services.",
            image: "aparment_hotel.png"
        }
    },
    {
        elemtent: {
            top:  "-20px",
            left: "410px"
        },
        information: {
            title: "Resort",
            description: "A place to which people frequently or generally go for relaxation or pleasure, especially one providing rest and recreation facilities for vacationers.",
            image: "resort.png"
        }
    },
    {
        elemtent: {
            top:  "-10px",
            left: "460px"
        },
        information: {
            title: "Business Class Hotel",
            description: "Business hotels are hotels located near the business district of the country/region they are in. They focus primarily on businesspersons, not providing too much family rooms. They are sure to provide you with fast internet and silent rooms, if they are good at least. Most of them also offer conference rooms, etc.",
            image: "business_class_hotel.png"
        }
    },
    {
        elemtent: {
            top:  "60px",
            left: "430px"
        },
        information: {
            title: "Inn",
            description: "Inns are generally establishments or buildings where travelers can seek lodging, and usually, food and drink. Inns are typically located in the country or along a highway; before the advent of motorized transportation they also provided accommodation for horses.",
            image: "inn.png"
        }
    },
    {
        elemtent: {
            top:  "70px",
            left: "350px"
        },
        information: {
            title: "BnB",
            description: "A bed and breakfast (typically shortened to BnB or BnB) is a small lodging establishment that offers overnight accommodation and breakfast. Bed and breakfasts are often private family homes and typically have between four and eleven rooms, with six being the average. In addition, a BnB usually has the hosts living in the house.",
            image: "bnb.png"
        }
    },
    {
        elemtent: {
            top:  "160px",
            left: "320px"
        },
        information: {
            title: "Time Share / Condo Hotel",
            description: "A condo hotel, also known as a condotel, hotel condo or a contel, is a building which is legally a condominium but which is operated as a hotel, offering short term rentals, and which maintains a front desk. Condo hotels are typically high-rise buildings developed and operated as luxury hotels, usually in major cities and resorts.",
            image: "time_condo.png"
        }
    },
    {
        elemtent: {
            top:  "135px",
            left: "530px"
        },
        information: {
            title: "CouchSurfing",
            description: "CouchSurfing is a service that connects members to a global community of travelers. Use CouchSurfing to find a place to stay or share your home and hometown with travelers. Couchsurfers organize regular events in 200,000 cities around the world. There is always something to do and new friends to meet.",
            image: "couch.png"
        }
    },
    {
        elemtent: {
            top:  "320px",
            left: "430px"
        },
        information: {
            title: "Castle",
            description: "A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders. Scholars debate the scope of the word castle, but usually consider it to be the private fortified residence of a lord or noble.",
            image: "castle.png"
        }
    },
    {
        elemtent: {
            top:  "80px",
            left: "710px"
        },
        information: {
            title: "Glamping",
            description: "Is a portmanteau of “glamorous” and “camping”, and describes a style of camping with amenities and, in some cases, resort-style services not usually associated with “traditional” camping. Glamping has become particularly popular with 21st-century tourists seeking the luxuries of hotel accommodation alongside “the escapism and adventure recreation of camping”",
            image: "glamping.png"
        }
    },
    {
        elemtent: {
            top:  "390px",
            left: "140px"
        },
        information: {
            title: "Lighthouse",
            description: "A lighthouse is a tower, building, or another type of structure designed to emit light from a system of lamps and lenses and to serve as a navigational aid for maritime pilots at sea or on inland waterways.",
            image: "lighthouse.png"
        }
    },
    {
        elemtent: {
            top:  "330px",
            left: "820px"
        },
        information: {
            title: "Tree House",
            description: "A tree house, tree fort or treeshed is a platform or building constructed around, next to or among the trunk or branches of one or more mature trees while above ground level. Tree houses can be used for recreation, workspace, habitation, a hangout space and observation.",
            image: "treehouse.png"
        }
    }
]

function loadPickers() {
    places.forEach((place, key)=>{
        console.log(place)
        $('.countet-picker').append(`<img src="./img/picker.svg" id="picker${(key+1)}" onclick="loadPickerInfo(${key})"/>`);
    })
}

function loadPickerInfo(placePosition) {
    let place = places[placePosition]
    $('#image-info').attr("src", `./img/${place.information.image}`);
    $('#title-info').text(place.information.title); 
    $('#description-info').text(place.information.description);
    $('.content-info').css('visibility', 'visible');
}

$(document).ready(function(){
    loadPickers()
});