'use client';

import { useState } from 'react';

interface ImageGalleryProps {
    images: string[];
    title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(images.length - 1);

    const nextImage = () => {
        setPreviousIndex(currentIndex);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setPreviousIndex(currentIndex);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const selectImage = (index: number) => {
        setPreviousIndex(currentIndex);
        setCurrentIndex(index);
    };

    return (
        <div className="p-4 md:p-10 bg-grey10 rounded-lg">
            {/* Мобильная версия */}
            <div className="md:hidden">
                {/* Большое изображение */}
                <div className="aspect-video overflow-hidden rounded-lg mb-2">
                    <img 
                        src={images[currentIndex]} 
                        alt={`${title} - текущее фото`}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Навигация и миниатюры */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <button 
                            onClick={prevImage}
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                            ←
                        </button>
                        
                        <div className="flex items-center space-x-1">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-0.5 ${
                                        index === currentIndex 
                                            ? 'bg-purple-500' 
                                            : 'bg-gray-600'
                                    }`}
                                    onClick={() => selectImage(index)}
                                />
                            ))}
                        </div>

                        <button 
                            onClick={nextImage}
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                            →
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="flex gap-1 w-full pb-1">
                            {images.map((image, index) => (
                                <div 
                                    key={index}
                                    className={`flex-none w-1/4 aspect-square overflow-hidden rounded-lg cursor-pointer ${
                                        index === currentIndex ? 'ring-2 ring-purple-500' : ''
                                    }`}
                                    onClick={() => selectImage(index)}
                                >
                                    <img 
                                        src={image} 
                                        alt={`${title} - фото ${index + 1}`}
                                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Десктопная версия */}
            <div className="hidden md:block space-y-6">
                {/* Верхняя галерея миниатюр */}
                <div className="overflow-x-auto">
                    <div className="flex gap-2 w-full pb-2">
                        {images.map((image, index) => (
                            <div 
                                key={index}
                                className={`flex-1 aspect-square overflow-hidden rounded-lg cursor-pointer ${
                                    index === currentIndex ? 'ring-2 ring-purple-500' : ''
                                }`}
                                onClick={() => selectImage(index)}
                            >
                                <img 
                                    src={image} 
                                    alt={`${title} - фото ${index + 1}`}
                                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Основные изображения */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Предыдущее изображение (слева) */}
                    <div className="aspect-video overflow-hidden rounded-lg">
                        <img 
                            src={images[previousIndex]} 
                            alt={`${title} - предыдущее фото`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Текущее изображение (справа) */}
                    <div className="aspect-video overflow-hidden rounded-lg">
                        <img 
                            src={images[currentIndex]} 
                            alt={`${title} - текущее фото`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Навигация */}
                <div className="flex items-center justify-center space-x-4">
                    <button 
                        onClick={prevImage}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                        ←
                    </button>
                    
                    <div className="flex items-center space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-0.5 ${
                                    index === currentIndex 
                                        ? 'bg-purple-500' 
                                        : 'bg-gray-600'
                                }`}
                                onClick={() => selectImage(index)}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={nextImage}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
} 