import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function MainContent() {
    const { t } = useTranslation();

    // Initialize particles
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    // Optional particle loaded callback
    const particlesLoaded = useCallback(async (container) => {
        console.log('Particles loaded:', container);
    }, []);

    return (
        <div
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('/assets/background.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#2E073F' // Fallback color
            }}
        >
            {/* Particles Effect */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="absolute inset-0 z-0"
                options={{
                    background: {
                        opacity: 0
                    },
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: ["#AD49E1", "#7A1CAC", "#ffffff"]
                        },
                        links: {
                            color: "#AD49E1",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: true,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.4
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: 1, max: 3 }
                        }
                    },
                    detectRetina: true
                }}
            />

            {/* Content */}
            <div className="container mx-auto relative z-10 px-4 md:px-8 pt-16">
                <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)]">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="max-w-3xl mx-auto"
                    >            <h1
                        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#AD49E1] via-[#7A1CAC] to-white bg-clip-text text-transparent mb-8"
                        data-aos="fade-down"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                    >
                            {t('welcome')}
                        </h1>

                        <p
                            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="800"
                        >
                            {t('description')}
                        </p>

                        <div
                            className="flex flex-wrap justify-center gap-6"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="800"
                        >
                            <button
                                className="bg-[#7A1CAC] hover:bg-[#AD49E1] text-white px-8 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-purple-800/30"
                            >
                                {t('contact')}
                            </button>

                            <button
                                className="border-2 border-[#7A1CAC] hover:border-[#AD49E1] text-white hover:text-[#AD49E1] px-8 py-4 rounded-md font-medium transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
                            >
                                {t('services')}
                            </button>
                        </div>          </div>

                    {/* Animated scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                        <div
                            className="w-10 h-16 border-2 border-white rounded-full flex justify-center p-1"
                            data-aos="fade-up"
                            data-aos-delay="700"
                        >
                            <div className="w-2 h-4 bg-white rounded-full animate-bounce mt-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}