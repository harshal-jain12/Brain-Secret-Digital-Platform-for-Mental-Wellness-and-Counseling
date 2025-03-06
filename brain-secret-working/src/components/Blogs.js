import React, { useState } from "react";

export default function Blogs() {
const [currentPage, setCurrentPage] = useState(1);
    const cards = [
        {
          id: 1,
          title: "Anxiety",
          imgSrc: process.env.PUBLIC_URL + "./images/anxiety.webp", // Ensure images are in 'public/images'
          description: "Anxiety: What Is Anxiety and its Causes, Symptoms & Types",
          link: "https://heartitout.in/blogs/anxiety/anxiety-what-is-anxiety-and-its-causes-symptoms-amp-types/",
          page: 1,
        },
        {
          id: 2,
          title: "Relationships",
          imgSrc: process.env.PUBLIC_URL + "./images/relationship.webp",
          description:
            "Understanding Relationships: Healing the Wounds of Broken Bonds",
          link: "https://heartitout.in/blogs/relationships/understanding-relationships-breaking-through-flawed-bonds/",
          page: 1,
        },
        {
          id: 3,
          title: "Depression",
          imgSrc: process.env.PUBLIC_URL + "./images/depression.webp",
          description: "Confronting Depression: The Impact of Early Intervention",
          link: "#",
          page: 1,
        },
        {
          id: 4,
          title: "Therapy",
          imgSrc: process.env.PUBLIC_URL + "./images/Therapy.jpg",
          description: "How To Find the Right Mental Health Professional for You?",
          link: "https://heartitout.in/blogs/therapy/how-to-find-the-right-mental-health-professional-for-you/",
          page: 2,
        },
        {
          id: 5,
          title: "Wellbeing",
          imgSrc: process.env.PUBLIC_URL + "./images/Wellbeing.jpg",
          description: "What Makes Some Food Comfort Food",
          link: "https://heartitout.in/blogs/wellbeing/what-makes-some-food-comfort-food/",
          page: 2,
        },
        {
          id: 6,
          title: "WriteWell",
          imgSrc: process.env.PUBLIC_URL + "./images/WriteWell.jpg",
          description: "Embracing Self-Care: Writing Your Own Path to Healing",
          link: "https://heartitout.in/blogs/wellbeing/writing-yourself-into-self-care/",
          page: 2,
        },
      ];
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    

      const filteredCards = cards.filter((card) => card.page === currentPage);
  return (
    <div className='container-blogs'>

     {/* Cards Section */}
     <div className="container card-container" style={{ marginTop: "20px", marginBottom: "30px" }}>
        <div className="row" id="card-container">
          {filteredCards.map((card) => (
            <div className="col-xl-4 mb-4" key={card.id}>
              <div className="card" style={{ width: "20rem", height: "32rem" }}>
                <img
                  src={card.imgSrc}
                  className="card-img-top"
                  alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href={card.link} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <nav aria-label="Page navigation" className="mt-4">
        <ul className="pagination justify-content-center">
          {[1, 2].map((page) => (
            <li
              className={`page-item ${currentPage === page ? "active" : ""}`}
              key={page}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>      



    </div>
  )
}
