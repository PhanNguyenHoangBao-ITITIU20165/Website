import cs from './petInfo.module.css';
import { useEffect } from 'react';
import BirdCollective from '../../../assests/petInformation/Birdpage//BirdCollective.png';
import bird1 from '../../../assests/petInformation/Birdpage/bird1.jpg';
import bird2 from '../../../assests/petInformation/Birdpage/bird2.jpg';
import bird3 from '../../../assests/petInformation/Birdpage/bird3.jpg';
import bird4 from '../../../assests/petInformation/Birdpage/bird4.jpg';
import bird5 from '../../../assests/petInformation/Birdpage/bird5.jpg';

export default function Bird() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    const Diseases = [
        {
            id: 1,
            name: 'Flu',
            img: bird1,
            causes: [
                'Due to the temperature difference, the daytime temperature is usually quite high, but it turns cold at night.',
                'Pet birds are often less active, so their resistance will be weaker, more susceptible to colds and flu.',
            ],
            symptoms: [
                'Infected birds may exhibit coughing or other respiratory distress.',
                'Birds infected with avian influenza may show signs of sneezing.',
                'In laying hens, a decrease in egg production or the production of soft-shelled or misshapen eggs may occur.',
                'Birds may experience swelling of the head, neck, and eyes.',
            ],
            treaments: [
                'When discovered, it is necessary to carefully check the condition. ',
                'If the bird has not ruffled its feathers and still combs its feathers normally, it means that the disease is not very serious.',
                'Move the bird cage to a warm, airtight, well-lit place, the temperature maintained at about 25°C.',
                'Use a cotton swab to wipe away the snot to help them breathe easier. For critically ill birds, use the antibiotic Chlortetracycline.',
                'Crush and mix into food, feed 2 times a day, treat for 3 days.',
                'If the bird does not feed on its own, mix it in drinking water and pump it slowly into its mouth to avoid choking.',
                'For large birds, most of them can clear up on their own without the need for medication.',
                'You can bake bananas and pepper to feed the birds. This will help them build their own resistance.',
            ],
            preventions: [
                "When buying new birds, it is necessary to mix antibiotics into the bird's food and water to kill pathogens.",
                'Supplement with nutrients that support the immune system such as: egg yolk, fish meal, canola oil.',
                'When the weather turns cold, the cage must be moved to a place that is airtight, with lots of light and warmth.',
            ],
        },
        {
            id: 2,
            name: 'Diarrhea caused by E. coli',
            img: bird2,
            causes: [
                'Certain strains of E. coli are considered pathogenic and can cause diseases in birds. These strains may produce toxins or have other virulence factors that contribute to intestinal infections.',
                'Birds can be exposed to pathogenic E. coli through contaminated environments, such as water sources or feed.',
                'nadequate sanitation practices, such as dirty water sources, soiled bedding, or unclean living conditions, can create an environment conducive to the proliferation of pathogenic bacteria, including E. coli.',
            ],
            symptoms: [
                'Birds with E. coli infections often exhibit changes in their droppings. The droppings may become loose, watery, and may lack the usual consistency.',
                'Infected birds may show an increased frequency of defecation, as the digestive system tries to eliminate the infectious agent.',
                'The color and texture of the droppings may change, appearing abnormal. The presence of mucus or blood in the droppings is also possible.',
            ],
            treaments: [
                'Immediately isolate birds showing signs of diarrhea to prevent the spread of the infection to other birds in the flock.',
                'Seek the expertise of an avian veterinarian for a thorough examination and diagnosis.',
                "Based on the veterinarian's diagnosis, antibiotic therapy may be prescribed to target the E. coli infection.",
                "Offer easily digestible and nutritious food to support the birds' overall health and recovery. ",
            ],
            preventions: [
                'Quarantine new birds before introducing them to an existing flock to prevent the introduction of infectious agents.',
                'Ensure a clean and uncontaminated water supply. Regularly clean and disinfect water containers.',
                'Monitor the health of birds regularly. Identify and isolate any birds showing signs of illness promptly.',
                'Work with a veterinarian to develop a vaccination program tailored to the specific risks in your region.',
            ],
        },
        {
            id: 3,
            name: 'Coccidiosis',
            img: bird3,
            causes: [
                'Different species of Eimeria target different parts of the digestive system, leading to variations in symptoms and severity.',
                'Coccidiosis spreads through the ingestion of oocysts present in contaminated environments, such as dirty litter, feces, and water sources.',
                "Inadequate nutrition or sudden changes in diet can weaken the bird's immune system, making them more susceptible to infections.",
                'Coccidiosis is often more severe in young birds, as their immune systems are not fully developed, and they may lack immunity to specific Eimeria species.',
            ],
            symptoms: [
                'Birds infected with coccidiosis often exhibit diarrhea, which may vary in consistency from mild to severe.',
                'Infected birds may experience weight loss as a result of diarrhea, decreased appetite, and nutrient malabsorption.',
                'Diarrhea can lead to dehydration due to fluid loss. Dehydrated birds may appear lethargic, weak, and have sunken eyes.',
            ],
            treaments: [
                'Anticoccidial drugs, known as coccidiostats, are commonly used to treat coccidiosis in birds. Examples include amprolium, sulfadimethoxine, toltrazuril, and others.',
                'Coccidiostats can be administered through the drinking water or mixed with feed to ensure that the affected birds receive the appropriate dosage.',
                "Veterinary consultation is crucial for an accurate diagnosis and prescription of the most suitable coccidiostat based on the type of coccidia present and the bird's age and health status.",
                'Ensure that affected birds receive adequate nutrition to support their recovery. This may involve providing easily digestible and nutrient-rich feed.',
            ],
            preventions: [
                'Regularly clean and disinfect poultry housing, equipment, and feeding areas. Remove manure promptly to reduce the environmental load of coccidia oocysts.',
                'Practice good personal hygiene, including handwashing, when handling birds, equipment, or feed. Avoid introducing contaminated materials into the bird environment.',
                'Ensure a clean and uncontaminated water supply. Coccidia oocysts can spread through water, so regularly clean water containers and avoid water sources that may be contaminated.',
            ],
        },
        {
            id: 4,
            name: 'Inflammatory disease of the sebaceous gland',
            img: bird4,
            causes: [
                'Hormonal fluctuations, especially during puberty, menstruation, pregnancy, and certain medical conditions, can stimulate the sebaceous glands to produce more oil (sebum).',
                'Sebaceous glands produce sebum, an oily substance that helps moisturize the skin.',
                'Propionibacterium acnes (P. acnes), a bacterium that normally resides on the skin, can proliferate in clogged hair follicles and contribute to inflammation.',
                'Abnormal shedding of skin cells and increased keratinization of hair follicles can result in the formation of plugs that block the follicles.',
            ],
            symptoms: [
                'These are non-inflammatory lesions characterized by the accumulation of sebum and dead skin cells within hair follicles.',
                'Small, raised, red bumps on the skin. Papules are a type of inflammatory acne lesion and result from the inflammation of hair follicles.',
                'Pustules are similar to papules but contain pus. They appear as red, inflamed bumps with a white or yellow center.',
                'Larger, solid, painful lumps beneath the surface of the skin. Nodules can be deeper and more severe than papules and pustules.',
            ],
            treaments: [
                'These help unclog pores and prevent the formation of new comedones.',
                'Oral antibiotics can be prescribed for their anti-inflammatory and antibacterial effects.',
                "Reserved for severe or resistant cases of acne. It's a potent oral medication with potential side effects, and its use requires close medical monitoring.",
            ],
            preventions: [
                'Cleanse the skin regularly with a mild, non-comedogenic cleanser to remove excess oil, dirt, and makeup.',
                "Opt for non-comedogenic or oil-free skincare and cosmetic products that won't clog pores.",
                "Even if you have oily skin, it's important to use a lightweight, non-comedogenic moisturizer to keep the skin hydrated without causing breakouts.",
                'Regularly apply a broad-spectrum sunscreen with an SPF of 30 or higher to protect the skin from UV damage.',
            ],
        },
        {
            id: 5,
            name: 'Foot diseases',
            img: bird5,
            causes: [
                'Bacteria such as Staphylococcus and Streptococcus can cause infections in the feet. These infections may result from injuries, scratches, or contaminated perches.',
                'Fungi like Aspergillus and Candida can lead to fungal infections in bird feet. Moist environments, poor hygiene, or exposure to contaminated substrates can contribute to fungal growth.',
                "External parasites like mites and lice can infest a bird's feet, causing irritation, inflammation, and discomfort.",
            ],
            symptoms: [
                'Swelling or inflammation of the feet and toes is a common symptom of various foot disorders.',
                'Changes in color, such as redness or darkening of the skin on the feet, may indicate inflammation, infection, or poor circulation.',
                'Birds experiencing pain or discomfort in their feet may exhibit lameness or a noticeable limp.',
                'Birds with foot problems may struggle to perch properly. They may avoid putting weight on one or both feet.',
            ],
            treaments: [
                'If you suspect that your bird has a foot disease, consult with an avian veterinarian for a proper diagnosis.',
                'If the foot disease is caused by a bacterial or fungal infection, the veterinarian may prescribe antibiotics or antifungal medications.',
                'For birds with open sores, wounds, or lesions on their feet, proper wound care is essential.',
                'Birds experiencing pain or discomfort may be prescribed pain management medications to alleviate their symptoms.',
            ],
            preventions: [
                "Regularly clean the bird's cage, perches, and accessories to prevent the buildup of feces, dirt, and debris.",
                'Use natural and varied perching surfaces of different diameters to promote foot health.',
                "Regularly inspect your bird's feet for any signs of abnormalities, such as sores, swelling, or changes in color.",
                'Provide a well-balanced and species-appropriate diet to ensure that your bird receives essential nutrients.',
            ],
        },
    ];

    return (
        <div className={cs['wrapper']}>
            <div className={cs['introduction']}>
                <div className={cs['title']}>
                    <p>Petpalz Blog #3</p>
                    <h4>
                        Common Diseases In Birds{' '}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
                            <path
                                d="M39.722 18.1473C39.3244 19.5988 38.5293 20.8568 37.4848 21.6883C36.6507 22.3533 35.7036 22.7011 34.772 22.7011C34.4213 22.7011 34.0783 22.6527 33.7392 22.5536C32.5076 22.1892 31.5097 21.1776 31.0031 19.7772C30.5393 18.5007 30.5081 16.9989 30.9057 15.547C31.3071 14.0955 32.1022 12.8376 33.1428 12.0061C34.2888 11.0928 35.6529 10.7771 36.8885 11.1407C38.1201 11.5051 39.1218 12.5168 39.6285 13.9171C40.0883 15.1937 40.1234 16.6954 39.722 18.1473ZM13.6625 14.4786C15.128 14.4786 16.5273 13.635 17.5016 12.163C18.3864 10.8284 18.8736 9.08037 18.8736 7.23995C18.8736 5.39791 18.3864 3.64984 17.5016 2.31525C16.5272 0.843698 15.128 0 13.6625 0C12.193 0 10.7939 0.843612 9.81945 2.31525C8.93863 3.64984 8.45141 5.39791 8.45141 7.23995C8.45141 9.08037 8.93863 10.8284 9.81945 12.163C10.7939 13.635 12.1931 14.4786 13.6625 14.4786ZM26.3376 14.4786C27.807 14.4786 29.2062 13.635 30.1806 12.163C31.0614 10.8284 31.5487 9.08037 31.5487 7.23995C31.5487 5.39791 31.0614 3.64984 30.1806 2.31525C29.2062 0.843698 27.8069 0 26.3376 0C24.872 0 23.4728 0.843612 22.4984 2.31525C21.6137 3.64984 21.1265 5.39791 21.1265 7.23995C21.1265 9.08037 21.6137 10.8284 22.4984 12.163C23.4728 13.635 24.872 14.4786 26.3376 14.4786ZM9.09448 15.5479C8.69307 14.0957 7.89797 12.8377 6.85723 12.0061C5.71135 11.0928 4.34721 10.7772 3.11162 11.1408C1.87611 11.5052 0.878275 12.5169 0.371557 13.9172C-0.0883569 15.1937 -0.123377 16.6955 0.27803 18.1474C0.675621 19.5989 1.47072 20.8569 2.51519 21.6884C3.34929 22.3534 4.29642 22.7012 5.22795 22.7012C5.57484 22.7012 5.92172 22.6528 6.25691 22.5537C7.49241 22.1893 8.49025 21.1776 8.99689 19.7773C9.46087 18.5008 9.49207 16.999 9.09448 15.5479ZM27.6471 19.0873C25.5112 16.7656 22.7984 15.4879 20 15.4879C17.2016 15.4879 14.4849 16.7656 12.3568 19.0873C10.3222 21.3014 8.90352 24.3736 8.3578 27.7395C8.01092 29.8867 8.64228 31.9532 10.0961 33.4087C11.6084 34.9234 13.5845 35.3834 15.5177 34.6723C16.9482 34.1443 18.4566 33.8767 20 33.8767C21.5435 33.8767 23.0519 34.1444 24.4823 34.6723C25.0787 34.8916 25.6789 35 26.2675 35C27.5887 35 28.8555 34.4567 29.9 33.4087C31.3577 31.9533 31.9891 29.8868 31.6422 27.7395C31.0966 24.3735 29.6778 21.3013 27.6471 19.0873Z"
                                fill="#FD7E14"
                            />
                        </svg>
                    </h4>
                </div>
                <img src={BirdCollective} alt=""></img>
            </div>

            {Diseases?.map((disease) => (
                <div key={disease.id} className={cs['pet-info-container']}>
                    <h4>
                        {disease.id}. {disease.name}
                    </h4>
                    <div className={cs['pet-info']}>
                        <img src={disease.img} alt={disease.name} />
                        <div className={cs['details']}>
                            <div className={cs['detail']}>
                                <p>Cause</p>
                                <ul>
                                    {disease.causes.map((cause, index) => (
                                        <li key={index}>{cause}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cs['detail']}>
                                <p>Symptoms</p>
                                <ul>
                                    {disease.symptoms.map((symptom, index) => (
                                        <li key={index}>{symptom}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cs['detail']}>
                                <p>Treatment</p>
                                <ul>
                                    {disease.treaments.map((treatment, index) => (
                                        <li key={index}>{treatment}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cs['detail']}>
                                <p>Prevention</p>
                                <ul>
                                    {disease.preventions.map((prevention, index) => (
                                        <li key={index}>{prevention}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
