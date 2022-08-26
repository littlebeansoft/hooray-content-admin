import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import AllSectionComponent from 'components/SectionComponent/AllSectionComponent'


const ContentPack: React.FC = () => {
    const router = useRouter()

    console.log("query", router.query.contentId)

    const mockSectionData = [
        {
            _id: "1",
            cover: "https://img-c.udemycdn.com/course/240x135/4689378_7c1d_2.jpg",
            title: "Front-End Figma HTML CSS Designers to Developers",
            description: "คอร์สเรียน Front-End Figma HTML CSS Designers to Developers the Series",
            catagory: "Development",
            contentPreviewUrl: "https://www.youtube.com/watch?v=d7xcLnuskqw",
            price: 2500,
            lengthText: "12:30:06",
            numOfsections: 5,
            numOfcontent: 56,
            section: [

            ],
            status: 'ACTIVE',
            createAt: "2022-08-24T13:48:15Z",
            updateAt: "2022-08-24T13:48:15Z",
        }
    ]

    return (
        <MainLayout breadcrumb={['Section ', 'บทเรียน']}>
            <TitleComponent
                title={`หลักสูตร ${mockSectionData[0].title}`}
                onBack={() =>
                    router.push({
                        pathname: `/org/[orgToken]/content-pack`,
                        query: {
                            ...router.query,
                        },
                    })
                }
            />
            <AllSectionComponent />
        </MainLayout>
    )
}

export default withAuth(ContentPack)
