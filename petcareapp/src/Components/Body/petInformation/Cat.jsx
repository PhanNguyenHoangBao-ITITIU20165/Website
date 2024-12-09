import cs from './petInfo.module.css';
import { useEffect } from 'react';
import CatCollective from '../../../assests/petInformation/Catpage/CatCollective.png';
import cat1 from '../../../assests/petInformation/Catpage/cat1.jpg';
import cat2 from '../../../assests/petInformation/Catpage/cat2.jpg';
import cat3 from '../../../assests/petInformation/Catpage/cat3.jpg';
import cat4 from '../../../assests/petInformation/Catpage/cat4.jpg';
import cat5 from '../../../assests/petInformation/Catpage/cat5.jpg';

export default function Cat() {
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
            name: 'Cat fungal disease',
            img: cat1,
            causes: [
                'Cats can contract fungal diseases by coming into contact with fungal spores present in the environment.',
                'Direct contact with an infected animal, such as another cat or small mammals, can transmit fungal spores.',
                'Fungal spores can persist on objects and surfaces, such as grooming tools, bedding, or furniture.'
            ],
            symptoms: [
                'When infected with fungus, the fungus is often itchy, uncomfortable, and falls out.',
                'The plaque may be scaly, foul-smelling, irritated, red in color.',
                'If it is more severe, it can spread throughout the body, spread to the whole cat and can even be transmitted.',
            ],
            treaments: [
                'We quickly shave the hair to avoid widespread spread and control the disease in time.',
                'First, clean the fungal area, then apply Nizoral, Kentax, Ketoconazole, Fungikur, Biopirox, zinc Oxid ointment.',
                'Severe cases can be combined with oral and liver supplements to increase the effectiveness of treatment and bring to the veterinary clinic for the best.',
            ],
            preventions: [
                "Schedule regular check-ups with your veterinarian to monitor your cat's health.",
                'Feed your cat a balanced and nutritious diet to support a strong immune system.',
                "Keep your cat's living environment clean and well-maintained. ",
                'Practice good hygiene when handling your cat.',
            ],
        },
        {
            id: 2,
            name: 'Cat flea disease',
            img: cat2,
            causes: [
                'It is caused by flea saliva, not by bites.',
                'Flea saliva contains certain protein components that cause allergic reactions, where an overreaction leads to inflammation.',
                'This condition will cause the cat to itch and scratch excessively, shedding patches, rough skin, swelling, and scabs.',
            ],
            symptoms: [
                'Cats infested with fleas often exhibit intense and frequent scratching, especially around the head, neck, and base of the tail.',
                'Fleas are irritating pests, and their bites can make cats restless.',
                'Cats may bite or chew at their fur, especially in areas where fleas congregate.',
            ],
            treaments: [
                'The simplest way to treat flea-bite dermatitis is to get rid of the fleas.',
                'Refer to methods to chase and kill fleas such as: using topical medications, sprays, nappy drops or flea collars... ',
                'In more severe cases, you must bring them to the veterinary clinic for the best treatment.',
            ],
            preventions: [
                "Apply monthly topical flea prevention products to your cat's skin.",
                'Use flea collars that are designed to repel and kill fleas.',
                'Brush your cat regularly to remove fleas and flea dirt.',
                'Vacuum your home regularly, paying attention to areas where your cat spends time.',
            ],
        },
        {
            id: 3,
            name: 'Vomiting disease',
            img: cat3,
            causes: [
                'By eating too much or running too soon after eating.',
                'Besides, there are cats vomiting related to stomach, intestines and internal organs.',
            ],
            symptoms: [
                'Cats groom themselves by licking their fur, and ingested hair can accumulate in the stomach, forming hairballs.',
                'Ingesting inappropriate or spoiled food can lead to vomiting.',
                'Infections caused by viruses, bacteria, or parasites can lead to vomiting.',
            ],
            treaments: [
                'To avoid the cat vomiting, we should deworm the kittens; pay attention to diet and nutrition.',
                'If the condition is critical, take the cat to the veterinarian immediately',
            ],
            preventions: [
                'Feed your cat a well-balanced, nutritious diet appropriate for their age and health condition.',
                "Schedule regular check-ups with your veterinarian to monitor your cat's overall health.",
                'Ensure your cat has access to clean and fresh water at all times to prevent dehydration.',
            ],
        },
        {
            id: 4,
            name: 'Cat refuse to eat',
            img: cat4,
            causes: [
                "The cause can be mentioned about the cat's anorexia due to habit, psychological or also due to disease.",
            ],
            symptoms: [
                'Dental issues, such as gum disease or toothache, can make eating painful for cats.',
                'Inflammation of the stomach or intestines, infections, or other gastrointestinal problems can lead to a loss of appetite.',
                'Cats with kidney disease may experience a decreased appetite.',
            ],
            treaments: [
                'To overcome this situation, you should find out why they stop eating to find an effective treatment.',
                'If it is related to habits and psychology, go back to the old diet or choose attractive foods, periodically deworm or not indulge them to eat well from the beginning.',
                'If it is related to a medical condition, you should seek medical attention immediatly.',
            ],
            preventions: [
                "Schedule regular veterinary check-ups to monitor your cat's overall health and catch any potential issues early.",
                "Provide a well-balanced and nutritionally complete diet suitable for your cat's age, weight, and health status.",
                "If you need to change your cat's diet, do it gradually over several days to avoid sudden food aversions.",
                'Ensure your cat has access to fresh and clean water at all times to prevent dehydration.',
            ],
        },
        {
            id: 5,
            name: 'Cat panting',
            img: cat5,
            causes: [
                'Cat panting is a condition in which a cat breathes very quickly, breathing is very labored when it is sleeping compared to usual and this is a symptom of their stress leading to lack of oxygen.',
                'A hot, stressed, or active cat may also experience hyperventilation, but this should go away in a few minutes.',
                'If the cat is breathing rapidly, this is a sign that the cat is suffering from respirator.',
            ],
            symptoms: [
                'Cats may pant in response to heat or overexertion, especially in warm weather.',
                'Panting can be a sign of stress or anxiety in cats.',
                'Respiratory problems, such as asthma or other lung conditions, can lead to panting.',
                'A cat with a fever may pant as the body tries to cool itself.',
            ],
            treaments: [
                'Ensure your cat has access to a cool and comfortable environment.',
                'Identify and minimize sources of stress.',
                'Consult with a veterinarian to diagnose respiratory problems.',
                'If heart disease is suspected, the veterinarian may prescribe medications to manage the condition.',
            ],
            preventions: [
                'Ensure your home is at a comfortable temperature, especially during hot weather.',
                'Always provide fresh and clean water for your cat. Proper hydration is crucial to prevent overheating.',
                'Minimize stressful situations for your cat. Cats may pant when they are anxious or scared.',
            ],
        },
    ];

    return (
        <div className={cs['wrapper']}>
            <div className={cs['introduction']}>
                <div className={cs['title']}>
                    <p>Petpalz Blog #1</p>
                    <h4>
                        Common Diseases In Cats{' '}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
                            <path
                                d="M39.722 18.1473C39.3244 19.5988 38.5293 20.8568 37.4848 21.6883C36.6507 22.3533 35.7036 22.7011 34.772 22.7011C34.4213 22.7011 34.0783 22.6527 33.7392 22.5536C32.5076 22.1892 31.5097 21.1776 31.0031 19.7772C30.5393 18.5007 30.5081 16.9989 30.9057 15.547C31.3071 14.0955 32.1022 12.8376 33.1428 12.0061C34.2888 11.0928 35.6529 10.7771 36.8885 11.1407C38.1201 11.5051 39.1218 12.5168 39.6285 13.9171C40.0883 15.1937 40.1234 16.6954 39.722 18.1473ZM13.6625 14.4786C15.128 14.4786 16.5273 13.635 17.5016 12.163C18.3864 10.8284 18.8736 9.08037 18.8736 7.23995C18.8736 5.39791 18.3864 3.64984 17.5016 2.31525C16.5272 0.843698 15.128 0 13.6625 0C12.193 0 10.7939 0.843612 9.81945 2.31525C8.93863 3.64984 8.45141 5.39791 8.45141 7.23995C8.45141 9.08037 8.93863 10.8284 9.81945 12.163C10.7939 13.635 12.1931 14.4786 13.6625 14.4786ZM26.3376 14.4786C27.807 14.4786 29.2062 13.635 30.1806 12.163C31.0614 10.8284 31.5487 9.08037 31.5487 7.23995C31.5487 5.39791 31.0614 3.64984 30.1806 2.31525C29.2062 0.843698 27.8069 0 26.3376 0C24.872 0 23.4728 0.843612 22.4984 2.31525C21.6137 3.64984 21.1265 5.39791 21.1265 7.23995C21.1265 9.08037 21.6137 10.8284 22.4984 12.163C23.4728 13.635 24.872 14.4786 26.3376 14.4786ZM9.09448 15.5479C8.69307 14.0957 7.89797 12.8377 6.85723 12.0061C5.71135 11.0928 4.34721 10.7772 3.11162 11.1408C1.87611 11.5052 0.878275 12.5169 0.371557 13.9172C-0.0883569 15.1937 -0.123377 16.6955 0.27803 18.1474C0.675621 19.5989 1.47072 20.8569 2.51519 21.6884C3.34929 22.3534 4.29642 22.7012 5.22795 22.7012C5.57484 22.7012 5.92172 22.6528 6.25691 22.5537C7.49241 22.1893 8.49025 21.1776 8.99689 19.7773C9.46087 18.5008 9.49207 16.999 9.09448 15.5479ZM27.6471 19.0873C25.5112 16.7656 22.7984 15.4879 20 15.4879C17.2016 15.4879 14.4849 16.7656 12.3568 19.0873C10.3222 21.3014 8.90352 24.3736 8.3578 27.7395C8.01092 29.8867 8.64228 31.9532 10.0961 33.4087C11.6084 34.9234 13.5845 35.3834 15.5177 34.6723C16.9482 34.1443 18.4566 33.8767 20 33.8767C21.5435 33.8767 23.0519 34.1444 24.4823 34.6723C25.0787 34.8916 25.6789 35 26.2675 35C27.5887 35 28.8555 34.4567 29.9 33.4087C31.3577 31.9533 31.9891 29.8868 31.6422 27.7395C31.0966 24.3735 29.6778 21.3013 27.6471 19.0873Z"
                                fill="#FD7E14"
                            />
                        </svg>
                    </h4>
                </div>
                <img src={CatCollective} alt=""></img>
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
