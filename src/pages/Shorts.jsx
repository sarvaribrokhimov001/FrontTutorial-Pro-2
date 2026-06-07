import { useState } from 'react';
import '../styles/Shorts.css';
import ThemeToggle from '../components/ThemeToggle';

const Shorts = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const shortsList = [
    { abbreviation: "DOM", fullForm: "Document Object Model" },
    { abbreviation: "API", fullForm: "Application Programming Interface" },
    { abbreviation: "JSON", fullForm: "JavaScript Object Notation" },
    { abbreviation: "AJAX", fullForm: "Asynchronous JavaScript and XML" },
    { abbreviation: "HTTP", fullForm: "Hypertext Transfer Protocol" },
    { abbreviation: "HTTPS", fullForm: "Hypertext Transfer Protocol Secure" },
    { abbreviation: "CSS", fullForm: "Cascading Style Sheets" },
    { abbreviation: "JS", fullForm: "JavaScript" },
    { abbreviation: "TS", fullForm: "TypeScript" },
    { abbreviation: "SEO", fullForm: "Search Engine Optimization" },
    { abbreviation: "UI", fullForm: "User Interface" },
    { abbreviation: "UX", fullForm: "User Experience" },
    { abbreviation: "JSONP", fullForm: "JSON with Padding" },
    { abbreviation: "SPA", fullForm: "Single Page Application" },
    { abbreviation: "PWA", fullForm: "Progressive Web App" },
    { abbreviation: "REST", fullForm: "Representational State Transfer" },
    { abbreviation: "CRUD", fullForm: "Create, Read, Update, Delete" },
    { abbreviation: "SVG", fullForm: "Scalable Vector Graphics" },
    { abbreviation: "DOM API", fullForm: "Document Object Model API" },
    { abbreviation: "HTTP Header", fullForm: "Information sent between client and server in HTTP requests" },
    { abbreviation: "URL", fullForm: "Uniform Resource Locator" },
    { abbreviation: "URI", fullForm: "Uniform Resource Identifier" },
    { abbreviation: "TCP", fullForm: "Transmission Control Protocol" },
    { abbreviation: "IP", fullForm: "Internet Protocol" },
    { abbreviation: "DNS", fullForm: "Domain Name System" },
    { abbreviation: "CDN", fullForm: "Content Delivery Network" },
    { abbreviation: "SQL", fullForm: "Structured Query Language" },
    { abbreviation: "NoSQL", fullForm: "Non Relational Database" },
    { abbreviation: "DB", fullForm: "Database" },
    { abbreviation: "OOP", fullForm: "Object Oriented Programming" },
    { abbreviation: "FP", fullForm: "Functional Programming" },
    { abbreviation: "IDE", fullForm: "Integrated Development Environment" },
    { abbreviation: "CLI", fullForm: "Command Line Interface" },
    { abbreviation: "GUI", fullForm: "Graphical User Interface" },
    { abbreviation: "SDK", fullForm: "Software Development Kit" },
    { abbreviation: "JWT", fullForm: "JSON Web Token" },
    { abbreviation: "OAuth", fullForm: "Open Authorization" },
    { abbreviation: "CORS", fullForm: "Cross-Origin Resource Sharing" },
    { abbreviation: "MVC", fullForm: "Model View Controller" },
    { abbreviation: "MVP", fullForm: "Minimum Viable Product" },
    { abbreviation: "SSR", fullForm: "Server Side Rendering" },
    { abbreviation: "CSR", fullForm: "Client Side Rendering" },
    { abbreviation: "SSG", fullForm: "Static Site Generation" },
    { abbreviation: "ORM", fullForm: "Object Relational Mapping" },
    { abbreviation: "BOM", fullForm: "Browser Object Model" },
    { abbreviation: "NPM", fullForm: "Node Package Manager" },
    { abbreviation: "YARN", fullForm: "Yet Another Resource Negotiator" },
    { abbreviation: "ES6", fullForm: "ECMAScript 2015" },
    { abbreviation: "ECMA", fullForm: "European Computer Manufacturers Association" },
    { abbreviation: "AI", fullForm: "Artificial Intelligence" },
    { abbreviation: "ML", fullForm: "Machine Learning" },
    { abbreviation: "CI/CD", fullForm: "Continuous Integration / Continuous Deployment" },
    { abbreviation: "Git", fullForm: "Global Information Tracker" },
    { abbreviation: "SEM", fullForm: "Search Engine Marketing" },
    { abbreviation: "SASS", fullForm: "Syntactically Awesome Style Sheets" },
    { abbreviation: "SCSS", fullForm: "Sassy Cascading Style Sheets" },
    { abbreviation: "BEM", fullForm: "Block Element Modifier" },
    { abbreviation: "FCP", fullForm: "First Contentful Paint" },
    { abbreviation: "LCP", fullForm: "Largest Contentful Paint" },
    { abbreviation: "TTFB", fullForm: "Time To First Byte" },
    { abbreviation: "SPA Routing", fullForm: "Single Page Application Navigation System" },
    { abbreviation: "ISR", fullForm: "Incremental Static Regeneration" },
    { abbreviation: "WebSocket", fullForm: "Full Duplex Communication Protocol" },
    { abbreviation: "WebRTC", fullForm: "Web Real-Time Communication" },
    { abbreviation: "MIME", fullForm: "Multipurpose Internet Mail Extensions" },
    { abbreviation: "UUID", fullForm: "Universally Unique Identifier" },
    { abbreviation: "UUIDv4", fullForm: "Universally Unique Identifier Version 4" },
    { abbreviation: "SEO Audit", fullForm: "Website Search Optimization Analysis" },
    { abbreviation: "KPI", fullForm: "Key Performance Indicator" },
    { abbreviation: "DX", fullForm: "Developer Experience" },
    { abbreviation: "TDD", fullForm: "Test Driven Development" },
    { abbreviation: "BDD", fullForm: "Behavior Driven Development" },
    { abbreviation: "E2E", fullForm: "End To End Testing" },
    { abbreviation: "Unit Test", fullForm: "Testing Individual Components" },
    { abbreviation: "API Gateway", fullForm: "Centralized API Management Layer" },
    { abbreviation: "GraphQL", fullForm: "Graph Query Language" },
    { abbreviation: "gRPC", fullForm: "Google Remote Procedure Call" },
    { abbreviation: "CSR Hydration", fullForm: "Client Side Rendering Hydration Process" },
    { abbreviation: "IAM", fullForm: "Identity And Access Management" },
    { abbreviation: "RBAC", fullForm: "Role Based Access Control" },
    { abbreviation: "SLA", fullForm: "Service Level Agreement" },
    { abbreviation: "SRE", fullForm: "Site Reliability Engineering" },
    { abbreviation: "K8s", fullForm: "Kubernetes" },
    { abbreviation: "VM", fullForm: "Virtual Machine" },
    { abbreviation: "VPS", fullForm: "Virtual Private Server" },
    { abbreviation: "SSH", fullForm: "Secure Shell" },
    { abbreviation: "FTP", fullForm: "File Transfer Protocol" },
    { abbreviation: "SFTP", fullForm: "Secure File Transfer Protocol" },
    { abbreviation: "LAN", fullForm: "Local Area Network" },
    { abbreviation: "WAN", fullForm: "Wide Area Network" },
    { abbreviation: "MAC", fullForm: "Media Access Control" },
    { abbreviation: "OS", fullForm: "Operating System" },
    { abbreviation: "BIOS", fullForm: "Basic Input Output System" },
    { abbreviation: "GPU", fullForm: "Graphics Processing Unit" },
    { abbreviation: "CPU", fullForm: "Central Processing Unit" },
    { abbreviation: "RAM", fullForm: "Random Access Memory" },
    { abbreviation: "ROM", fullForm: "Read Only Memory" },
    { abbreviation: "IIFE", fullForm: "Immediately Invoked Function Expression" },
    { abbreviation: "HOC", fullForm: "Higher Order Component" },
    { abbreviation: "CSRF", fullForm: "Cross Site Request Forgery" },
    { abbreviation: "XSS", fullForm: "Cross Site Scripting" },
    { abbreviation: "SQLi", fullForm: "SQL Injection" },
    { abbreviation: "CD", fullForm: "Continuous Deployment" },
    { abbreviation: "CI", fullForm: "Continuous Integration" },
    { abbreviation: "Monorepo", fullForm: "Single Repository Architecture" },
    { abbreviation: "Microservice", fullForm: "Independent Service Architecture" },
    { abbreviation: "VPN", fullForm: "Virtual Private Network" },
    { abbreviation: "JSX", fullForm: "JavaScript XML" },
    { abbreviation: "USB", fullForm: "Universal Serial Bus" },
    { abbreviation: "HTML", fullForm: "HyperText Markup Language" },
    { abbreviation: "HTML5", fullForm: "HyperText Markup Language Version 5" },
    { abbreviation: "DOCTYPE", fullForm: "Document Type Declaration" },
    { abbreviation: "META", fullForm: "Metadata Information Tag" },
    { abbreviation: "ALT", fullForm: "Alternative Text" },
    { abbreviation: "SRC", fullForm: "Source File Path" },
    { abbreviation: "HREF", fullForm: "Hypertext Reference" },
    { abbreviation: "SEO HTML", fullForm: "Search Engine Optimized HTML Structure" },
    { abbreviation: "ARIA", fullForm: "Accessible Rich Internet Applications" },
    { abbreviation: "DOM Tree", fullForm: "Hierarchical Structure of HTML Elements" },
    { abbreviation: "Semantic HTML", fullForm: "Meaningful HTML Structure" }
  ];

  const filteredShorts = shortsList.filter(item =>
    item.abbreviation.toLowerCase().includes(search.toLowerCase()) ||
    item.fullForm.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className='Shorts__title HTML__title'> Frontend Shortcuts & Terms </h1>
      <div className="search__wrapper">
        <input 
         className='Shorts__input HTML__input' 
         type="search" 
         placeholder='Search abbreviation or full form' 
         value={search}
         onChange={(e) => setSearch(e.target.value)} />

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className='All__shorts'>
        <ul>
          {filteredShorts.length > 0 ? (
            filteredShorts.map((item, index) => (
              <li key={index} className='shorts__item'>
                <strong> {item.abbreviation} </strong> - {item.fullForm}
              </li>
            ))) : (
            <li className='shorts__notfound tags__not__founded'> Shortcuts and Terms are not found ❌ </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Shorts;