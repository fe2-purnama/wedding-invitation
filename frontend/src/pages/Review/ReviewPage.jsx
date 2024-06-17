/* eslint-disable no-unused-vars */
import React from 'react';
import user1 from '../../assets/user.jpg';
import styled from 'styled-components';

const testimonials = [
  { id: 1, name: "Budi - Lorem", rating: 5, description: "Lorem ipsum dolor sit amet.", imageUrl: user1, package: 'basic' },
  { id: 2, name: "User 2", rating: 4, description: "Consectetur adipiscing elit.", imageUrl: user1, package: 'premium' },
  { id: 3, name: "User 3", rating: 3, description: "Sed do eiusmod tempor.", imageUrl: user1, package: 'vip' },
  { id: 4, name: "User 4", rating: 5, description: "Incididunt ut labore et dolore.", imageUrl: user1, package: 'basic' },
  { id: 5, name: "User 5", rating: 4, description: "Magna aliqua.", imageUrl: user1, package: 'vip' },
  { id: 6, name: "User 6", rating: 5, description: "Magna aliqua.", imageUrl: user1, package: 'vip' },
  { id: 7, name: "User 7", rating: 3, description: "Magna aliqua.", imageUrl: user1, package: 'basic' },
  { id: 8, name: "User 8", rating: 4, description: "Magna aliqua.", imageUrl: user1, package: 'premium' },
];

const getBackgroundColor = (packageType) => {
  switch(packageType) {
    case 'basic':
      return 'bg-sky-200';
    case 'premium':
      return 'bg-red-200';
    case 'vip':
      return 'bg-yellow-200';
    default:
      return 'bg-gray-200';
  }
};

const SectionReview = styled.section`
  background: ${({ theme }) => theme.sectionReview};
  color: ${({ theme }) => theme.textColorReview};
  transition: background-color 0.5s ease;
  z-index: -1;
`;

const ReviewPage = () => {
  return (
    <SectionReview >
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-20">Review user</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`relative ${getBackgroundColor(testimonial.package)} pt-12 p-4 rounded shadow-md mb-6`}>
              <div
                className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gray-200 h-20 w-20 flex items-center justify-center shadow-lg"
                style={{ borderRadius: '10px' }}
              >
                <img src={testimonial.imageUrl} alt={testimonial.name} className="h-full w-full object-cover" style={{ borderRadius: '10px' }} />
              </div>
              <h2 className="text-xl font-semibold mt-8">{testimonial.name}</h2>
              <p className="text-sm">{testimonial.description}</p>
              <div className="mt-2">
                <span className="text-yellow-500">{"★".repeat(testimonial.rating)}</span>
                <span className="text-gray-500">{"★".repeat(5 - testimonial.rating)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReview>
  );
};

export default ReviewPage;
