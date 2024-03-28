import React from 'react';
import Header from '../ui/Header';

import ExamDetails from '../ui/ExamDetails';
const ExamsProfile = () => {
    return (
        <div>
            <Header header={ 'Exams Profiles' } subheader={ 'Manage, Design and Customize exam profiles here.' } />
            <div className='border-2 border-gray-300 rounded-md p-2'>
                <div className='grid grid-cols-3 gap-6'>
                    <ExamDetails />
                    <ExamDetails />
                    <ExamDetails />
                </div>
            </div>
        </div>
    );
};

export default ExamsProfile;