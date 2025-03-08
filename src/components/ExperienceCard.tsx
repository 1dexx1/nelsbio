import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/Modal";
import MediaCarousel from "@/components/MediaCarousel";
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import Divider from "@/components/Divider";

interface ExperienceCardProps {
    url?: string;
    title: string;
    fullDescription: string[];
    cardDescription: string;
    cardImage: string;
    media: string[];
    delay: number;
    gradient: string;
    myRole: string;
    timeline: string;
}

export default function ExperienceCard({ url, title, fullDescription, cardDescription, cardImage, media, delay, gradient, myRole, timeline }: ExperienceCardProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const animationConfig = {
        initial: { transform: 'translateY(-30px)', opacity: 0 },
        whileInView: { transform: 'translateY(0px)', opacity: 100 },
        transition: { duration: 0.5, delay, ease: [0.39, 0.21, 0.12, 0.96] },
        viewport: { amount: 0.1, once: true }
    };

    return (
        <>
            <motion.li className="group flex" {...animationConfig}>
                <div className={`p-4 flex md:flex-row flex-col gap-6 ${gradient} from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background items-center w-full`}>
                    <img 
                        alt={`${title} preview`}
                        draggable={false}
                        loading="lazy"
                        className="rounded-lg grayscale group-hover:grayscale-0 duration-300 max-h-[14rem] max-w-[22rem]"
                        src={cardImage}
                    />
                    
                    <div className="flex flex-col flex-1">
                        <h3 className="md:text-left text-center font-normal text-4xl">{title}</h3>
                        <h2><span className="brightness-75">{timeline}</span></h2>
                        <h2 className="md:text-left text-center font-semibold text-2xl">моя роль: {myRole}</h2>
                        <Divider />
                        <p className="md:text-left text-center text-lg mt-1">{cardDescription}</p>
                        
                        <div className="flex row gap-4 mt-2">
                            {url && <LinkButton label="перейти на сайт" link={url} width="w-1/2" />}
                            <Button 
                                label="посмотреть больше"
                                onClick={() => setModalOpen(true)}
                                width={url ? 'w-1/2' : 'w-full'}
                            />
                        </div>
                    </div>

                    <Modal open={modalOpen} setOpen={setModalOpen}>
                        <MediaCarousel media={media} />
                        <div className="flex lg:flex-row flex-col justify-between mt-6 px-3">
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-2 items-center">
                                    <h1 className="sm:text-4xl text-3xl font-bold">{title}</h1>
                                    {url && (
                                        <Link href={url} target="_blank" className="bg-middle hover:bg-secondary duration-300 border-1 border-accent p-1.5 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 16 16">
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                                <div className="flex flex-col mt-2">
                                    <h2 className="sm:text-2xl text-xl font-semibold">моя роль</h2>
                                    <p className="sm:text-lg text-base">{myRole}</p>
                                </div>
                                <div className="flex flex-col mt-2">
                                    <h2 className="sm:text-2xl text-xl font-semibold">таймлайн</h2>
                                    <p className="sm:text-lg text-base">{timeline}</p>
                                </div>
                            </div>

                            <div className="w-auto h-0.5 bg-accent rounded-lg lg:hidden block my-16" />

                            <div className="flex flex-col lg:ml-[3rem]">
                                <h2 className="sm:text-2xl text-xl font-semibold">описание</h2>
                                <div className="max-h-[16.5rem] overflow-y-scroll bg-neutral-800 border-1 border-accent rounded-lg p-2">
                                    {fullDescription.map((desc, i) => (
                                        <p key={i} className="sm:text-lg text-base first:mt-0 mt-2 max-w-[28rem]">{desc}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </motion.li>
        </>
    );
}
