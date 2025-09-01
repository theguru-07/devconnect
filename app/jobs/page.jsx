import JobCard from "@/components/JobCard";

export default function JobsPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "DevConnect Inc.",
      location: "Remote",
      type: "Full-time",
      postedDate: "2 days ago",
      experience: "1-3 years",
      description:
        "We are looking for a passionate Frontend Developer with React/Next.js experience to join our growing team.",
    },
    {
      title: "Backend Engineer",
      company: "TechGuru",
      location: "Bangalore, India",
      type: "Part-time",
      postedDate: "1 week ago",
      experience: "2-4 years",
      description:
        "Build scalable backend APIs with Node.js, Express, and MongoDB. Cloud deployment experience is a plus.",
    },
    {
      title: "Full Stack Developer",
      company: "InnovateX",
      location: "New York, USA",
      type: "Contract",
      postedDate: "3 days ago",
      experience: "3-5 years",
      description:
        "Join our dynamic team to work on cutting-edge web applications using the MERN stack.",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Remote",
      type: "Freelance",
      postedDate: "5 days ago",
      experience: "2-3 years",
      description:
        "Design intuitive and engaging user interfaces for web and mobile applications. Proficiency in Figma or Adobe XD required.",
    },
    {
      title: "DevOps Engineer",
      company: "CloudNet",
      location: "San Francisco, USA",
      type: "Full-time",
      postedDate: "1 day ago",
      experience: "4-6 years",
      description:
        "Manage cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes is essential.",
    },
    {
      title: "Data Scientist",
      company: "DataInsights",
      location: "Remote",
      type: "Full-time",
      postedDate: "2 days ago",
      experience: "3-5 years",
      description:
        "Analyze complex data sets to drive business solutions. Proficiency in Python and machine learning is required.",
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Innovations",
      location: "Remote",
      type: "Full-time",
      postedDate: "1 week ago",
      experience: "3-5 years",
      description:
        "Develop and deploy machine learning models. Experience with TensorFlow and PyTorch is a plus.",
    },
    {
      title: "Data Engineer",
      company: "DataSolutions",
      location: "Remote",
      type: "Full-time",
      postedDate: "2 days ago",
      experience: "3-5 years",
      description:
        "Design and maintain data pipelines. Proficiency in SQL and data warehousing is required.",
    },
    {
      title: "Data Analyst",
      company: "Insightful Analytics",
      location: "Remote",
      type: "Full-time",
      postedDate: "1 week ago",
      experience: "2-4 years",
      description:
        "Interpret data and provide actionable insights. Experience with Tableau and Power BI is a plus.",
    },
    {
      title: "Business Analyst",
      company: "Strategic Insights",
      location: "Remote",
      type: "Full-time",
      postedDate: "2 weeks ago",
      experience: "3-5 years",
      description:
        "Gather and analyze business requirements to drive solutions. Strong communication skills are essential.",
    }
    
  ];

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}
