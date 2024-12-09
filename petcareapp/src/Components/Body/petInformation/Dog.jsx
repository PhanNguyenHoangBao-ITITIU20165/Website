import cs from './petInfo.module.css';
import { useEffect } from 'react';
import DogCollective from '../../../assests/petInformation/Dogpage/Dog.png';
import dog1 from '../../../assests/petInformation/Dogpage/dog1.jpg';
import dog2 from '../../../assests/petInformation/Dogpage/dog2.jpg';
import dog3 from '../../../assests/petInformation/Dogpage/dog3.jpg';
import dog4 from '../../../assests/petInformation/Dogpage/dog4.jpg';
import dog5 from '../../../assests/petInformation/Dogpage/dog5.jpg';
import dog6 from '../../../assests/petInformation/Dogpage/dog6.jpg';

export default function Dog() {
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
            name: 'Infectious hepatitis',
            img: dog1,
            causes: [
                "Infectious hepatitis is mainly caused by the canine adenovirus-1 (CAV-1) virus, which penetrates the oral route, then enters the gastrointestinal tract through the tissues of most organs of the dog's body.",
            ],
            symptoms: [
                'In the first 4-7 days, the dog will often stop eating and then go into a coma.',
                'If the dog suddenly stops eating, the bloody diarrhea is too acute and usually within a few hours, the puppy will be more likely to die even though no symptoms have occurred.',
                'In the acute form, the dog will have a high fever (above 39 degrees Celsius), besides that, they will also stop eating, diarrhea and vomiting blood, the dog will often bend, writhe in pain, have bleeding spots under the skin, which are easy to see. especially in the abdomen. If the dog has symptoms of jaundice, it is difficult to survive.',
            ],
            treaments: [
                'If the dog is too acute, it is difficult to treat, usually it will die in about 2-3 days.',
                'Besides, this disease has no specific treatment, mainly treated with a number of measures such as: Rehydration, electrolyte balance, glucose infusion, lactated ringer, vitamins,...',
                'Do not give food containing fat food.',
                'Use antiseptic antibiotics and take care as prescribed by your doctor.',
            ],
            preventions: [
                'Vaccinate dogs against infectious hepatitis.',
                'Puppies must be vaccinated from 6 to 8 weeks of age, to 12 weeks of age, to be vaccinated again, once a year.',
                'When a dog is suspected of being sick, it is necessary to isolate it immediately and clean the place where the dog is kept and the area where the dog is raised.',
            ],
        },
        {
            id: 2,
            name: 'Gastritis in dogs',
            img: dog2,
            causes: [
                'Due to hookworm, parvo virus, virus that causes disease or eating food and drinking water containing typhoid bacteria (Salmonella), anaerobic bacteria (Clostridium), E.Coli bacteria,...',
            ],
            symptoms: [
                'Infected dogs will have a fever, refuse to eat, sometimes accompanied by tremors, continuous vomiting, severe diarrhea, transition to the last stage, the feces will be dark brown, very fishy, ​​this period the dog cannot walk, only stay in one place.',
                'If care is not attentive and timely, dogs can die from 2-4 days after infection.',
            ],
            treaments: [
                'If the dog is infected, the dog should stop eating for the first 24 hours, just give the dog enough water.',
                'If the dog is vomiting, anticholinergics and chlorpromazine or metoclopramide can be used to make the dog more comfortable.',
            ],
            preventions: [
                'Feed the dog cooked food, do not let it eat raw meat, regularly deworm the dog every 3-4 months and vaccinate against Care, Parvovirus.',
            ],
        },
        {
            id: 3,
            name: 'Bronchitis',
            img: dog3,
            causes: [
                'Due to infection with the following bacteria: Streptococcus (streptococcus), staphylococcus aureus (staphylococcus aureus) or parasitic infection, it can also be caused by weather, inhalation of dust, chemicals,...',
                'In addition to food and water Choking into the respiratory tract also causes bronchitis.',
            ],
            symptoms: [
                'Cough, difficulty breathing especially in the morning, wheezing, crackles, or persistent watery eyes and nose.',
                'Dogs may have a high fever, fatigue, loss of appetite, and coughing up mucus.',
            ],
            treaments: [
                'Antibiotics and bronchodilators as well as anti-inflammatory drugs can be used to treat acute bronchitis in dogs.',
                'As for chronic bronchitis, anti-inflammatory and antitussive drugs will make your dog more comfortable.',
            ],
            preventions: [
                "Clean the dog's place, the place must be warm in the winter and cool in the summer.",
                'At the same time, it is necessary to vaccinate against vaccines: rabies, caraway, infectious hepatitis, cough for dogs to create a strong resistance for your pet.',
            ],
        },
        {
            id: 4,
            name: 'Pneumonia',
            img: dog4,
            causes: [
                "Due to respiratory viruses or bacteria entering the dog's respiratory system such as: Pneumococcus, streptococcus, klebsiella, bordetella ...",
                'Or due to a larva of parasites in the bronchi such as: Filaroides, actu strongylus, paragonimus also cause pneumonia.',
            ],
            symptoms: [
                'Fatigue, loss of appetite, high fever, red mucous membranes, frequent coughing at night and early morning, shortness of breath, dark red mouth, congestion, cyanosis or lying in one place, weakness and rapid and shallow breathing.',
            ],
            treaments: [
                'If your dog suddenly stops eating, loses water, has a high fever, ... should be hospitalized immediately.',
                'Dogs with difficulty breathing or breathing, give the dog oxygen, intravenous fluids are needed to replenish water and electrolytes to rehydrate.',
            ],
            preventions: [
                'Sanitize your pet and its environment to ensure that your pet has a clean, healthy space.',
                'Next is to periodically vaccinate such as: Care, parvovirus, rabies, infectious hepatitis, lepto, ...',
                'Periodically deworming many times is also one of the effective ways to treat pneumonia.',
            ],
        },
        {
            id: 5,
            name: 'Rabies',
            img: dog5,
            causes: [
                'Rabies can be transmitted when your dog is injured by other infected animals.',
                'Or another cause is due to the virus entering through an open, unhealed wound that is exposed to fluid or saliva containing Lyssavirus.',
            ],
            symptoms: [
                'Unusual biting and barking in the early stages.',
                "The next stage when the dog becomes uncontrollable is also when the dog is in the most severe stage of rabies, it is easy to notice the dog's bad appearance such as delayed jaw, bloodshot eyes, drooling, and white foam.",
            ],
            treaments: [
                'There is no specific drug to treat rabies for dogs, when detecting signs of rabies, the dog should not be let loose, it should be promptly taken to a veterinary facility for examination.',
                'Disinfect the area around the dog suspected or infected with rabies (especially with saliva) diluted in a ratio of 1:32 (150g / 4 liters) of household bleach solution.',
            ],
            preventions: ['Routine rabies vaccination once a year from the time your dog is 3 months old.'],
        },
        {
            id: 6,
            name: 'Diarrhea, Vomiting',
            img: dog6,
            causes: [
                'Due to abnormal eating such as eating too much meat, junk food is not good for the intestines, or it can also be caused by bacteria and germs in food.',
            ],
            symptoms: [
                'Skipping food, lying in one place, easily nauseated, stools with an unpleasant fishy smell.',
                'Followed by abdominal pain, vomiting, bloody stools, fever, dehydration.',
            ],
            treaments: [
                'Give your dog water to drink crushed squid grass mixed with ½ bowl of water, ¼ teaspoon of salt to eat 2-5 times a day, ¼ cup each time or you can use oresol diarrhea medicine, if you have free time, you can cook roasted rice porridge This also helps in treating diarrhea effectively.',
            ],
            preventions: [
                'Do not let the dog have a hungry meal or a full meal to avoid disturbing the stomach and causing diarrhea.',
                'Bones, especially chicken bones, should not be given to puppies.',
                'In addition, you need to give your dog clean water to drink.',
                'Keep the living space clean and regularly vaccinated and dewormed periodically.',
            ],
        },
    ];

    return (
        <div className={cs['wrapper']}>
            <div className={cs['introduction']}>
                <div className={cs['title']}>
                    <p>Petpalz Blog #2</p>
                    <h4>
                        Common Diseases In Dogs{' '}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
                            <path
                                d="M39.722 18.1473C39.3244 19.5988 38.5293 20.8568 37.4848 21.6883C36.6507 22.3533 35.7036 22.7011 34.772 22.7011C34.4213 22.7011 34.0783 22.6527 33.7392 22.5536C32.5076 22.1892 31.5097 21.1776 31.0031 19.7772C30.5393 18.5007 30.5081 16.9989 30.9057 15.547C31.3071 14.0955 32.1022 12.8376 33.1428 12.0061C34.2888 11.0928 35.6529 10.7771 36.8885 11.1407C38.1201 11.5051 39.1218 12.5168 39.6285 13.9171C40.0883 15.1937 40.1234 16.6954 39.722 18.1473ZM13.6625 14.4786C15.128 14.4786 16.5273 13.635 17.5016 12.163C18.3864 10.8284 18.8736 9.08037 18.8736 7.23995C18.8736 5.39791 18.3864 3.64984 17.5016 2.31525C16.5272 0.843698 15.128 0 13.6625 0C12.193 0 10.7939 0.843612 9.81945 2.31525C8.93863 3.64984 8.45141 5.39791 8.45141 7.23995C8.45141 9.08037 8.93863 10.8284 9.81945 12.163C10.7939 13.635 12.1931 14.4786 13.6625 14.4786ZM26.3376 14.4786C27.807 14.4786 29.2062 13.635 30.1806 12.163C31.0614 10.8284 31.5487 9.08037 31.5487 7.23995C31.5487 5.39791 31.0614 3.64984 30.1806 2.31525C29.2062 0.843698 27.8069 0 26.3376 0C24.872 0 23.4728 0.843612 22.4984 2.31525C21.6137 3.64984 21.1265 5.39791 21.1265 7.23995C21.1265 9.08037 21.6137 10.8284 22.4984 12.163C23.4728 13.635 24.872 14.4786 26.3376 14.4786ZM9.09448 15.5479C8.69307 14.0957 7.89797 12.8377 6.85723 12.0061C5.71135 11.0928 4.34721 10.7772 3.11162 11.1408C1.87611 11.5052 0.878275 12.5169 0.371557 13.9172C-0.0883569 15.1937 -0.123377 16.6955 0.27803 18.1474C0.675621 19.5989 1.47072 20.8569 2.51519 21.6884C3.34929 22.3534 4.29642 22.7012 5.22795 22.7012C5.57484 22.7012 5.92172 22.6528 6.25691 22.5537C7.49241 22.1893 8.49025 21.1776 8.99689 19.7773C9.46087 18.5008 9.49207 16.999 9.09448 15.5479ZM27.6471 19.0873C25.5112 16.7656 22.7984 15.4879 20 15.4879C17.2016 15.4879 14.4849 16.7656 12.3568 19.0873C10.3222 21.3014 8.90352 24.3736 8.3578 27.7395C8.01092 29.8867 8.64228 31.9532 10.0961 33.4087C11.6084 34.9234 13.5845 35.3834 15.5177 34.6723C16.9482 34.1443 18.4566 33.8767 20 33.8767C21.5435 33.8767 23.0519 34.1444 24.4823 34.6723C25.0787 34.8916 25.6789 35 26.2675 35C27.5887 35 28.8555 34.4567 29.9 33.4087C31.3577 31.9533 31.9891 29.8868 31.6422 27.7395C31.0966 24.3735 29.6778 21.3013 27.6471 19.0873Z"
                                fill="#FD7E14"
                            />
                        </svg>
                    </h4>
                </div>
                <img src={DogCollective} alt=""></img>
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
