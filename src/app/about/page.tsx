'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ModalImage from "@/components/modalimage";
import FloatingSidebar from '@/components/floatingsidebar';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <motion.div
        className="flex flex-col pt-20 pb-20 min-h-screen bg-gradient-to-r from-black via-[#1a0000] to-[#4b0000] text-white"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{ backgroundSize: "200% 200%" }}
    >
        <Navbar />
        <FloatingSidebar />

        <motion.main
            className="flex flex-col items-center px-4 max-w-5xl mx-auto"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <motion.h1
                id="about"
                className="text-4xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
            Who am I?
            </motion.h1>

            <motion.p
                className="text-lg text-gray-300 mb-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                I am an aspiring Software Engineer with a background in distribution control and data analysis, where I developed a strong eye for detail, problem-solving skills, and process optimization strategies. In my previous role, I leveraged data-driven insights to improve inventory management and streamline workflows, enhancing operational efficiency. Now, I am expanding my technical expertise in React, Python, and software development principles, actively applying my skills to real-world projects. With a passion for building impactful software and a commitment to continuous learning, I am eager to contribute to a collaborative team where I can create scalable solutions and drive innovation.
            </motion.p>

            <motion.section
                className="w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
            >
                <h2 
                    id='education'
                    className="text-2xl font-bold mb-8 text-center"
                >
                    Education
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 relative overflow-hidden group">
                        <Image
                            src="/support/education.webp"
                            alt="Education Illustration"
                            width={192}
                            height={192}
                            className="w-48 h-auto object-cover transition-transform duration-500 group-hover:scale-250 group-hover:translate-x-4 group-hover:translate-y-50"
                        />

                        <p className="text-xs">
                            *Not me, but...<br />
                            We have the same expression<br />
                            at graduation.</p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold">RevoU</h3>
                            <p className="text-sm text-gray-400">June 2024 – December 2024</p>
                            <p className="text-gray-300">
                            Full Stack Software Engineering<br />
                            Proper code for frontend with React and backend with Python.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">Budi Luhur University</h3>
                            
                            <p className="text-sm text-gray-400">September 2013 – March 2017</p>
                            
                            <p className="text-gray-300">
                            GPA: 3.19<br />
                            Bachelor of Economy & Business<br />
                            Analysis of the Level of Understanding of Tax Sanctions, Understanding of Tax Amnesty, Taxpayer Awareness, and the Quality of Tax Office Services on the Compliance of Individual Income Taxpayers.
                            </p>
                        </div>

                        <div className="mt-4 flex gap-4 mb-10">
                            <ModalImage
                            buttonLabel="View RevoU Certificate"
                            imageUrl="/support/certificate 1.webp"
                            altText="RevoU Certificate"
                            />
                            
                            <ModalImage
                            buttonLabel="View University Certificate"
                            imageUrl="/support/certificate 2.webp"
                            altText="University Certificate"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                id="experience"
                className="w-full mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Working Experiences</h2>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold">Finance / PT Bumimulya Sejahtera Makmur</h3>
                
                        <p className="text-sm text-gray-400">December 2022 - February 2023 ( Due to Bankruptcy )</p>
                
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Designed a financial system that improved fund security, reducing unauthorized transactions by 25%.</li>
                
                            <li>Created a payroll calculation template, cutting payroll processing time by 20% and ensured timely payments.</li>
                
                            <li>Implemented budget tracking, reducing operational costs by 15%.</li>
                
                            <li>Developed financial reporting templates, improving data accuracy and cutting reporting time by 20%, enabling faster decision-making.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Distribution Control / PT Penta Artha Impressi</h3>
                
                        <p className="text-sm text-gray-400">April 2022 – November 2022</p>
                
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Developed an inventory request template that accelerated processing time by 30%, reducing delays from 6 days to 4 days.</li>
                
                            <li>Optimized logistics, cutting transport costs by 25% while improving delivery reliability.</li>
                
                            <li>Implemented a stock-sharing system that cut excess inventory by 20%, balancing stock levels for branches.</li>
                
                            <li>Collaborated with internal control teams to improve inventory accuracy by 10%, minimizing stock discrepancies.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Admin Office / PT Arenti Advance Solusi</h3>
                
                        <p className="text-sm text-gray-400">April 2021 – March 2022 ( Due to Bankruptcy )</p>
                
                        <ul className="list-disc list-inside text-gray-300">
                            <li>Automated payroll processing, increasing efficiency by 20% and ensuring timely salary disbursement.</li>
                
                            <li>Enhanced accounting workflows, reducing financial statement preparation time by 10%.</li>
                
                            <li>Streamlined financial reporting using Zahir, cutting closure time by 50% and improving accuracy.</li>
                
                            <li>Optimized procurement documentation, cutting approval time by 15% and improving audit compliance.</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            <motion.section
                id="fun-facts"
                className="w-full mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Fun Facts</h2>
                
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>I currently writing psychological fiction and thrillers story in my spare time.</li>
                
                    <li>I can play bass guitar.</li>

                    <li>In 2021, i lost around 15kg.... only to gained it back months later (-_- &quot;)</li>
                
                    <li>I have a love-hate relationship with frontend, and unrequited love with backend</li>
                </ul>
            </motion.section>

            <motion.section
                id="skills"
                className="w-full mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Soft Skills</h2>
                
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Detail-Oriented – I naturally pay close attention to small details.</li>
                
                    <li>Analytical Skills – I enjoy breaking down complex information to find patterns and insights.</li>
                    
                    <li>Adaptability – Transitioned from business to tech roles efficiently and successfully.</li>
                    
                    <li>Time Management – Consistently meet deadlines across solo and collaborative projects.</li>
                </ul>
            </motion.section>

            <motion.section
                id="strengths-weaknesses"
                className="w-full mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                >
                <h2 className="text-2xl font-bold mb-4 text-center">Strengths & Weaknesses</h2>
                
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold mb-2">Strengths</h3>
                
                        <ul className="list-disc list-inside space-y-2">
                            <li>Analytical mindset – I enjoy deconstructing problems to find logical, data-driven solutions.</li>
                            
                            <li>Eager to learn – I embrace challenges as opportunities to grow, whether it is learning new tech stacks or problem-solving techniques.</li>
                            
                            <li>Strong attention to detail – I naturally notice small inconsistencies and always strive for precision.</li>
                            
                            <li>Time-oriented – I consistently meet deadlines and value punctuality in both personal and professional settings.</li>
                        </ul>

                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold mb-2">Weaknesses</h3>
                
                        <ul className="list-disc list-inside space-y-2">
                            <li>Sometimes doubt my capabilities – I practice self-reflection and gather feedback to stay grounded and build confidence.</li>
                            
                            <li>Still learning backend deeply — but progressing steadily by building personal projects and studying documentation/tutorials regularly.</li>
                            
                            <li>Tendency to over-polish – I have learned to set scope limits and trust that &quot;done&quot; can be better than &quot;perfect&quot;.</li>
                            
                            <li>Not a fan of CSS... but I can wrestle with it when I have to. I use utility frameworks like Tailwind to minimize friction.</li>
                            
                            <li>Public speaking – I am improving by practicing in smaller groups, rehearsing presentations aloud, and learning storytelling techniques.</li>
                        </ul>
                    </div>
                </div>
            </motion.section>
        </motion.main>
        <Footer />
    </motion.div>
  );
}