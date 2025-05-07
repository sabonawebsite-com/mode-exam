
const questions = [

    {
      question: "What percentage of consumer spending is estimated to go towards marketing costs?",
      options: ["25%", "40%", "50%", "60%"],
      answer: "50%"
    },
    {
      question: "Which type of utility refers to the physical or design of a product or service?",
      options: ["Place Utility", "Time Utility", "Form Utility", "Possession Utility"],
      answer: "Form Utility"
    },
    {
      question: "Which marketing philosophy emphasizes that consumers will favor products that are widely available and low in cost?",
      options: ["Product Concept", "Selling Concept", "Production Concept", "Marketing Concept"],
      answer: "Production Concept"
    },
    {
      question: "The statement “A good product will sell itself” is most aligned with which marketing philosophy?",
      options: ["Selling Concept", "Marketing Concept", "Product Concept", "Societal Marketing Concept"],
      answer: "Product Concept"
    },
    {
      question: "Which concept assumes that consumers will not buy enough of an organization's product unless the organization undertakes aggressive selling and promotion efforts?",
      options: ["Marketing Concept", "Selling Concept", "Societal Marketing Concept", "Relationship Marketing Concept"],
      answer: "Selling Concept"
    },
    {
      question: "Which marketing concept focuses on achieving organizational goals by being more effective than competitors in integrating marketing activities toward determining and satisfying the needs and wants of target markets?",
      options: ["Selling Concept", "Production Concept", "Marketing Concept", "Societal Marketing Concept"],
      answer: "Marketing Concept"
    },
    {
      question: "Which concept holds that an organization should consider the long-run welfare of consumers and society?",
      options: ["Marketing Concept", "Selling Concept", "Societal Marketing Concept", "Product Concept"],
      answer: "Societal Marketing Concept"
    },
    {
      question: "What is the practice of building long-term satisfying relations with key parties to retain their long-term preferences and business?",
      options: ["Marketing Concept", "Selling Concept", "Relationship Marketing", "Production Concept"],
      answer: "Relationship Marketing"
    },
    {
      question: "What is the ultimate outcome of relationship marketing?",
      options: ["Increased sales", "Customer satisfaction", "A marketing network", "Market dominance"],
      answer: "A marketing network"
    },
    {
      question: "In relationship marketing, what is considered the most critical component?",
      options: ["Customer satisfaction", "Customer service", "Customer experience", "Product quality"],
      answer: "Customer experience"
    },
    {
      question: "Which of the following is NOT a component of a Marketing Information System?",
      options: ["Internal Records", "Marketing Intelligence", "Marketing Research", "Production Planning"],
      answer: "Production Planning"
    },
    {
      question: "What is the systematic and objective identification, collection, analysis, and dissemination of information for the purpose of assisting management in decision making related to marketing?",
      options: ["Marketing Intelligence", "Competitive Analysis", "Marketing Research", "Sales Forecasting"],
      answer: "Marketing Research"
    },
     {
      question: "What are the three functional roles of marketing research?",
      options: ["Planning, organizing, controlling", "Descriptive, diagnostic, predictive", "Production, finance, marketing", "Sales, promotion, advertising"],
      answer: "Descriptive, diagnostic, predictive"
    },
    {
      question: "Which of the following is a component of marketing research?",
      options: ["Product design", "Price elasticity testing", "Production costs", "Employee satisfaction"],
      answer: "Price elasticity testing"
    },
    {
      question: "What is the systematic process of gathering, analyzing, supplying, and applying information about the external market environment?",
      options: ["Marketing Research", "Marketing Intelligence", "Competitive Analysis", "Sales Forecasting"],
      answer: "Marketing Intelligence"
    },
    {
      question: "What is evaluated information used to determine current and future market needs and changes in the business environment?",
      options: ["Market data", "Sales reports", "Intelligence", "Research findings"],
      answer: "Intelligence"
    },
    {
      question: "Which method of undertaking marketing intelligence involves a purposeful search for information in some systematic way?",
      options: ["Unfocused scanning", "Semi-focused scanning", "Informal search", "Formal search"],
      answer: "Formal search"
    },
    {
      question: "What does competitive analysis help businesses understand?",
      options: ["Customer demographics", "Competitors’ strengths and weaknesses", "Economic indicators", "Political trends"],
      answer: "Competitors’ strengths and weaknesses"
    },
    {
      question: "What is the foundation of marketing?",
      options: ["Sales", "Advertising", "Exchange", "Production"],
      answer: "Exchange"
    },
    {
      question: "What does marketing consist of, in a broad sense?",
      options: ["Selling products", "Advertising products", "All activities designed to generate or facilitate an exchange intended to satisfy human needs", "Pricing products"],
      answer: "All activities designed to generate or facilitate an exchange intended to satisfy human needs"
    },
    {
      question: "What are the controllable variables that the marketing manager can manipulate?",
      options: ["4 C’s of Marketing", "4 P’s of Marketing", "3 R’s of Marketing", "5 S’s of Marketing"],
      answer: "4 P’s of Marketing"
    },
    {
      question: "Which of the following is NOT one of the 4 P's of marketing?",
      options: ["Product", "Price", "Place", "People"],
      answer: "People"
    },
    {
      question: "What is a marketing strategy?",
      options: ["A short-term plan to increase sales", "A process to concentrate limited resources on the greatest opportunities to increase sales and achieve a sustainable competitive advantage", "A method to reduce marketing costs", "A way to enter new markets quickly"],
      answer: "A process to concentrate limited resources on the greatest opportunities to increase sales and achieve a sustainable competitive advantage"
    },
    {
     question: "What is the value placed on what is exchanged?",
      options: ["Utility", "Satisfaction", "Price", "Cost"],
      answer: "Price"
    },
    {
      question: "Which pricing strategy involves charging the highest possible price for a product?",
      options: ["Penetration Pricing", "Cost-plus Pricing", "Price Skimming", "Competition Oriented Pricing"],
      answer: "Price Skimming"
    },
    {
      question: "Which pricing strategy involves reducing prices compared to competitors’ prices to penetrate the market and increase sales?",
      options: ["Price Skimming", "Penetration Pricing", "Cost-plus Pricing", "Odd-even Pricing"],
      answer: "Penetration Pricing"
    },
    {
      question: "What is the communication of the company and its products to customers?",
      options: ["Pricing", "Distribution", "Promotion", "Product Development"],
      answer: "Promotion"
    },
    {
      question: "Which of the following is a paid form of non-personal, one-way, mass communication?",
      options: ["Personal Selling", "Public Relations", "Advertising", "Sales Promotion"],
      answer: "Advertising"
    },
    {
      question: "What are the ways of delivering products to the market?",
      options: ["Promotion channels", "Distribution strategies", "Pricing strategies", "Product placements"],
      answer: "Distribution strategies"
    },
    {
      question: "What type of distribution channel involves intermediaries between the seller and buyer?",
      options: ["Direct channels", "Indirect channels", "Vertical channels", "Horizontal channels"],
      answer: "Indirect channels"
    },
    {
      question: "What is the primary purpose of the idea screening stage in product development?",
      options: ["To generate a large number of ideas", "To lessen the number of ideas to a few valuable ones", "To develop a marketing strategy", "To test the feasibility of an idea"],
      answer: "To lessen the number of ideas to a few valuable ones"
    },
    {
      question: "Who typically reviews ideas during the idea screening process?",
      options: ["Customers", "Suppliers", "An idea committee", "Competitors"],
      answer: "An idea committee"
    },
    {
      question: "What is the outcome of refining attractive ideas in the product development process?",
      options: ["A business plan", "A product prototype", "Fast able product concepts", "A market analysis"],
      answer: "Fast able product concepts"
    },
    {
      question: "Concept testing involves gathering reactions from which group?",
      options: ["Investors", "Employees", "An appropriate group of target consumers/customers", "Government agencies"],
      answer: "An appropriate group of target consumers/customers"
    },
    {
      question: "What is developed after concept testing in the new product development process?",
      options: ["A prototype", "A preliminary marketing strategy plan", "A production schedule", "A financial forecast"],
      answer: "A preliminary marketing strategy plan"
    },
    {
     question: "Which of the following is NOT a part of the preliminary marketing strategy plan?",
      options: ["Planned price", "Distribution strategy", "Production costs", "Marketing budget of the 1st year"],
      answer: "Production costs"
    },
    {
      question: "What is the long-run focus of the marketing strategy development stage?",
      options: ["Short-term sales targets", "Immediate customer feedback", "Long run sales and profit goals, marketing mix strategy", "Operational efficiency"],
      answer: "Long run sales and profit goals, marketing mix strategy"
    },
    {
      question: "What is the next step after management develops a product concept and marketing strategy?",
      options: ["Product testing", "Market launch", "Proposal evaluation", "Production"],
      answer: "Proposal evaluation"
    },
    {
      question: "What is the process through which companies react to market signals and changes in customer demand?",
      options: ["Market analysis", "Product/service development", "Business planning", "Competitive strategy"],
      answer: "Product/service development"
    },
    {
      question: "What is identified as a core process in achieving strategic objectives and deterring competition?",
      options: ["Financial management", "Human resource management", "Product/service development", "Operations management"],
      answer: "Product/service development"
    },
    {
      question: "Which of the following is NOT one of the four stages of the product/service development process mentioned?",
      options: ["Idea Generation", "Incubation", "Implementation", "Evaluation"],
      answer: "Evaluation"
    },
    {
      question: "Which of the following is a fruitful source of ideas for entrepreneurs?",
      options: ["Competitors' weaknesses", "Government regulations", "Consumers", "Economic downturns"],
      answer: "Consumers"
    },
    {
      question: "Approximately what percentage of consumer spending goes towards marketing costs?",
      options: ["25%", "40%", "50%", "75%"],
      answer: "50%"
    },
    {
      question: "Which type of utility is related to making a product or service accessible to customers?",
      options: ["Form Utility", "Place Utility", "Time Utility", "Possession Utility"],
      answer: "Place Utility"
    },
    {
      question: "Informing buyers that a product or service exists relates to which type of utility?",
      options: ["Form Utility", "Place Utility", "Information Utility", "Time Utility"],
      answer: "Information Utility"
    },
    {
      question: "Which marketing philosophy focuses on efficient production and wide distribution?",
      options: ["Product Concept", "Selling Concept", "Production Concept", "Marketing Concept"],
      answer: "Production Concept"
    },
    {
      question: "A company that focuses on making superior products and improving them over time follows which philosophy?",
      options: ["Selling Concept", "Marketing Concept", "Product Concept", "Societal Marketing Concept"],
      answer: "Product Concept"
    },
    {
      question: "The saying 'sell what you make rather than make what the market wants' aligns with which concept?",
      options: ["Marketing Concept", "Selling Concept", "Societal Marketing Concept", "Relationship Marketing Concept"],
      answer: "Selling Concept"
    },
    {
      question: "Which marketing concept emphasizes understanding and satisfying the needs and wants of target markets better than competitors?",
      options: ["Selling Concept", "Production Concept", "Marketing Concept", "Societal Marketing Concept"],
      answer: "Marketing Concept"
    },
    {
      question: "Considering the long-run welfare of consumers and society is a key aspect of which concept?",
      options: ["Marketing Concept", "Selling Concept", "Societal Marketing Concept", "Product Concept"],
      answer: "Societal Marketing Concept"
    },
    {
      question: "Building long-term satisfying relations with customers, suppliers, and distributors is the focus of:",
      options: ["Transactional marketing", "Mass marketing", "Relationship marketing", "Niche marketing"],
      answer: "Relationship marketing"
    },
    {
      question: "What is considered a unique company asset built through relationship marketing?",
      options: ["Brand equity", "Customer database", "Marketing network", "Distribution channel"],
      answer: "Marketing network"
    },
    {
      question: "In relationship marketing, what is considered the most critical component?",
      options: ["Customer satisfaction", "Product features", "Customer experience", "Pricing strategy"],
      answer: "Customer experience"
    },
    {
      question: "Which of the following is NOT one of the 4 Ps of marketing?",
      options: ["Product", "Price", "Promotion", "Process"],
      answer: "Process"
    },
    {
      question: "What element of the marketing mix refers to the communication of the company and its products to customers?",
      options: ["Product", "Price", "Place", "Promotion"],
      answer: "Promotion"
    },
    {
      question: "What is the value placed on what is exchanged in a marketing transaction?",
      options: ["Cost", "Price", "Utility", "Satisfaction"],
      answer: "Price"
    },
    {
      question: "Charging the highest possible price for a product to attract a market seeking quality or status is known as:",
      options: ["Penetration pricing", "Cost-plus pricing", "Price skimming", "Competitive pricing"],
      answer: "Price skimming"
    },
    {
      question: "Which pricing strategy involves setting a lower price than competitors to gain market share?",
      options: ["Price skimming", "Cost-plus pricing", "Penetration pricing", "Value pricing"],
      answer: "Penetration pricing"
    },
    {
      question: "What refers to the way of delivering products to the market?",
      options: ["Supply chain management", "Distribution channels", "Logistics", "Inventory management"],
      answer: "Distribution channels"
    },
    {
      question: "In which type of distribution channel do producers and end-users interact directly?",
      options: ["Indirect channels", "Multi-channels", "Direct channels", "Hybrid channels"],
      answer: "Direct channels"
    },
  
{
  question: "What is the primary function of an operating system?",
  options: ["To run user applications", "To manage computer hardware and software resources", "To provide internet connectivity", "To perform mathematical calculations"],
  answer: "To manage computer hardware and software resources"
},
{
  question: "Which of the following is NOT a core component of an operating system?",
  options: ["Kernel", "Shell", "File System", "Web Browser"],
  answer: "Web Browser"
},
{
  question: "What is the role of the kernel in an operating system?",
  options: ["Provides the user interface", "Manages low-level hardware operations", "Handles file storage", "Compiles user code"],
  answer: "Manages low-level hardware operations"
},
{
  question: "What is a process in an operating system?",
  options: ["A program stored on disk", "A program in execution", "A hardware component", "A system call"],
  answer: "A program in execution"
},
{
  question: "What is a thread in an operating system?",
  options: ["A heavy-weight process", "A separate address space", "A lightweight unit of execution within a process", "A virtual memory address"],
  answer: "A lightweight unit of execution within a process"
},
{
  question: "Which of the following is a process scheduling algorithm?",
  options: ["Bubble Sort", "Binary Search", "First-Come, First-Served (FCFS)", "Depth-First Search"],
  answer: "First-Come, First-Served (FCFS)"
},
{
  question: "What is the goal of Shortest Job First (SJF) scheduling?",
  options: ["Minimize turnaround time", "Maximize CPU utilization", "Ensure fairness among processes", "Minimize response time"],
  answer: "Minimize turnaround time"
},
{
  question: "What is a disadvantage of the Priority Scheduling algorithm?",
  options: ["Simple to implement", "Guarantees low waiting times for high-priority processes", "Can lead to starvation of low-priority processes", "Maximizes throughput"],
  answer: "Can lead to starvation of low-priority processes"
},
{
  question: "What is a time quantum in Round Robin scheduling?",
  options: ["The minimum execution time for a process", "The maximum priority a process can have", "A fixed amount of CPU time allocated to each process", "The time it takes for a context switch"],
  answer: "A fixed amount of CPU time allocated to each process"
},
{
  question: "What is context switching?",
  options: ["Switching between different users", "Switching between different hardware components", "Saving the state of one process and loading the saved state of another process", "Changing the priority of a process"],
  answer: "Saving the state of one process and loading the saved state of another process"
},
{
  question: "What is deadlock in an operating system?",
  options: ["A process that runs indefinitely", "A situation where two or more processes are blocked indefinitely, each waiting for a resource held by another", "A memory allocation error", "A file system corruption"],
  answer: "A situation where two or more processes are blocked indefinitely, each waiting for a resource held by another"
},
{
  question: "Which of the following is a necessary condition for deadlock?",
  options: ["Preemption", "Mutual Exclusion", "No Hold and Wait", "Circular Wait"],
  answer: "Mutual Exclusion"
},
{
  question: "Which of the following is a deadlock prevention technique?",
  options: ["Banker's Algorithm", "Resource Allocation Graph", "Allowing processes to request all necessary resources before execution", "Detecting cycles in the resource allocation graph"],
  answer: "Allowing processes to request all necessary resources before execution"
},
{
  question: "What is the purpose of memory management in an operating system?",
  options: ["To manage the CPU", "To manage input/output devices", "To allocate and deallocate memory to processes", "To manage the file system"],
  answer: "To allocate and deallocate memory to processes"
},
{
  question: "What is the difference between logical address and physical address?",
  options: ["Logical address is generated by the CPU, physical address is the actual address in memory", "Physical address is generated by the CPU, logical address is the actual address in memory", "They are the same", "Logical address is used for disk storage, physical address for RAM"],
  answer: "Logical address is generated by the CPU, physical address is the actual address in memory"
},
{
  question: "What is paging in memory management?",
  options: ["Dividing the physical memory into fixed-size blocks called pages", "Dividing the logical memory into fixed-size blocks called frames", "Dividing both logical and physical memory into variable-size blocks", "Swapping entire processes between memory and disk"],
  answer: "Dividing the physical memory into fixed-size blocks called frames"
},
{
  question: "What is segmentation in memory management?",
  options: ["Dividing the physical memory into variable-size blocks called segments", "Dividing the logical memory into variable-size blocks called segments", "Dividing both logical and physical memory into fixed-size blocks", "Allocating contiguous blocks of memory to processes"],
  answer: "Dividing the logical memory into variable-size blocks called segments"
},
{
  question: "What is virtual memory?",
  options: ["A technique to make the CPU run faster", "A technique that allows processes to execute even if they are not entirely in memory", "A type of RAM", "Memory that is physically located on the disk"],
  answer: "A technique that allows processes to execute even if they are not entirely in memory"
},
{
  question: "What is demand paging?",
  options: ["Loading all pages of a process into memory at the start", "Loading pages into memory only when they are needed", "Writing modified pages back to disk immediately", "Allocating fixed-size partitions to processes"],
  answer: "Loading pages into memory only when they are needed"
},
{
  question: "Which layer of the OSI model is responsible for defining protocols for user applications?",
  options: ["Session", "Presentation", "Application", "Transport"],
  answer: "Application"
},
{
  question: "What is the TCP/IP model?",
  options: ["A 7-layer network model", "A 4 or 5-layer network model commonly used in the internet", "A hardware specification for network cards", "A set of rules for physical network connections"],
  answer: "A 4 or 5-layer network model commonly used in the internet"
},
{
  question: "Which layer of the TCP/IP model corresponds to the OSI Physical and Data Link layers?",
  options: ["Application", "Transport", "Internet", "Network Access"],
  answer: "Network Access"
},
{
  question: "What is an IP address?",
  options: ["A physical address of a network interface card", "A logical address that identifies a device on a network", "A media access control address", "A port number for a network application"],
  answer: "A logical address that identifies a device on a network"
},
{
  question: "What is IPv4?",
  options: ["The next generation of the Internet Protocol", "The current dominant version of the Internet Protocol using 32-bit addresses", "A protocol used for wireless communication", "A protocol used for network security"],
  answer: "The current dominant version of the Internet Protocol using 32-bit addresses"
},
{
  question: "What is IPv6?",
  options: ["An older version of the Internet Protocol", "The next generation of the Internet Protocol using 128-bit addresses", "A protocol used for local area networks", "A protocol used for email transmission"],
  answer: "The next generation of the Internet Protocol using 128-bit addresses"
},
{
  question: "What is a subnet mask?",
  options: ["A physical address of a network device", "A 32-bit number that identifies the network and host portions of an IP address", "A password for network access", "A type of network cable"],
  answer: "A 32-bit number that identifies the network and host portions of an IP address"
},
{
  question: "What is a MAC address?",
  options: ["A logical address assigned by a network administrator", "A physical address assigned to a network interface card (NIC)", "An IP address", "A port number"],
  answer: "A physical address assigned to a network interface card (NIC)"
},
{
  question: "What is the purpose of the Address Resolution Protocol (ARP)?",
  options: ["To resolve IP addresses to MAC addresses", "To resolve MAC addresses to IP addresses", "To assign IP addresses to devices", "To route packets across networks"],
  answer: "To resolve IP addresses to MAC addresses"
},
{
  question: "What is the purpose of the Domain Name System (DNS)?",
  options: ["To assign IP addresses to devices", "To translate domain names to IP addresses", "To route email messages", "To secure network connections"],
  answer: "To translate domain names to IP addresses"
},
{
  question: "What is HTTP?",
  options: ["A protocol for sending email", "A protocol for transferring files", "The foundation of data communication for the World Wide Web", "A protocol for network security"],
  answer: "The foundation of data communication for the World Wide Web"
},
{
  question: "What is HTTPS?",
  options: ["A faster version of HTTP", "HTTP with added security (encryption)", "A protocol for transferring large files", "A protocol for streaming video"],
  answer: "HTTP with added security (encryption)"
},
{
  question: "What is TCP?",
  options: ["A connectionless protocol", "A reliable, connection-oriented protocol", "A protocol used for broadcasting messages", "A protocol used for network management"],
  answer: "A reliable, connection-oriented protocol"
},
{
  question: "What is UDP?",
  options: ["A reliable, connection-oriented protocol", "A connectionless protocol that prioritizes speed over reliability", "A protocol used for email", "A protocol used for web browsing"],
  answer: "A connectionless protocol that prioritizes speed over reliability"
},
{
  question: "What is a port number in TCP/IP?",
  options: ["A physical connection point on a network device", "A logical address used to identify a specific process or service running on a device", "A part of the IP address", "A security key for network access"],
  answer: "A logical address used to identify a specific process or service running on a device"
},
{
  question: "What is a firewall?",
  options: ["A physical barrier to network access", "A network security system that controls incoming and outgoing network traffic", "A device that amplifies network signals", "A type of network cable"],
  answer: "A network security system that controls incoming and outgoing network traffic"
},
{
  question: "What is a router?",
  options: ["A device that connects computers within a local network", "A device that forwards data packets between networks", "A device that amplifies network signals", "A device that provides wireless internet access"],
  answer: "A device that forwards data packets between networks"
},
{
  question: "What is a switch?",
  options: ["A device that forwards data packets between networks based on MAC addresses", "A device that forwards data packets based on IP addresses", "A device that provides wireless internet access", "A device that modulates and demodulates signals"],
  answer: "A device that forwards data packets between networks based on MAC addresses"
},
{
  question: "What is a hub?",
  options: ["An intelligent device that forwards data packets", "A device that broadcasts incoming signals to all connected devices", "A device used in wireless networks", "A type of network software"],
  answer: "A device that broadcasts incoming signals to all connected devices"
},
{
  question: "What is Wi-Fi?",
  options: ["A wired networking standard", "A popular wireless networking technology based on IEEE 802.11 standards", "A type of network cable", "A protocol for secure communication"],
  answer: "A popular wireless networking technology based on IEEE 802.11 standards"
},
{
  question: "What is Ethernet?",
  options: ["A wireless networking standard", "A family of wired computer networking technologies", "A protocol for internet routing", "A type of network security"],
  answer: "A family of wired computer networking technologies"
},
{
  question: "What is network topology?",
  options: ["The physical layout of network cables", "The logical arrangement of nodes and connections in a network", "The speed of data transmission", "The protocols used in a network"],
  answer: "The logical arrangement of nodes and connections in a network"
},
{
  question: "Which of the following is a common network topology?",
  options: ["Stack", "Queue", "Tree", "Bus"],
  answer: "Bus"
},
{
  question: "What is network latency?",
  options: ["The speed of data transmission", "The delay in data transfer over a network", "The number of devices connected to a network", "The physical distance between network nodes"],
  answer: "The delay in data transfer over a network"
},
{
  question: "What is network bandwidth?",
  options: ["The delay in data transfer", "The capacity of a network connection to transmit data", "The physical size of the network", "The number of protocols used in a network"],
  answer: "The capacity of a network connection to transmit data"
},
{
  question: "What is network security?",
  options: ["Protecting network infrastructure and data from unauthorized access, use, disclosure, disruption, modification, or destruction", "Physically securing network cables", "Optimizing network performance", "Managing network devices"],
  answer: "Protecting network infrastructure and data from unauthorized access, use, disclosure, disruption, modification, or destruction"
},
{
  question: "Which of the following is a network security protocol?",
  options: ["HTTP", "FTP", "SSH", "SMTP"],
  answer: "SSH"
},
{
  question: "What is encryption?",
  options: ["Converting data into a human-readable format", "Converting data into an unreadable format to protect its confidentiality", "Compressing data to reduce its size", "Transmitting data over a secure channel"],
  answer: "Converting data into an unreadable format to protect its confidentiality"
},
{
  question: "What is a VPN?",
  options: ["A physical private network", "A virtual private network that extends a private network across a public network", "A very fast public network", "A type of network cable"],
  answer: "A virtual private network that extends a private network across a public network"
},
{
  question: "What is network monitoring?",
  options: ["Physically inspecting network hardware", "Continuously observing a computer network for performance, errors, and security issues", "Setting up new network devices", "Documenting network configurations"],
  answer: "Continuously observing a computer network for performance, errors, and security issues"
},
{
  question: "What is network troubleshooting?",
  options: ["Designing new network architectures", "Identifying and resolving problems in a computer network", "Installing network software", "Training users on network usage"],
  answer: "Identifying and resolving problems in a computer network"
},
{
  question: "What does DBMS stand for?",
  options: ["Data Base Management System", "Digital Binary Management System", "Distributed Business Management System", "Database Manipulation Software"],
  answer: "Data Base Management System"
},
{
  question: "What is the primary goal of a DBMS?",
  options: ["To store and retrieve data efficiently and securely", "To run user applications", "To manage computer hardware", "To provide internet access"],
  answer: "To store and retrieve data efficiently and securely"
},
{
  question: "Which of the following is NOT a type of database model?",
  options: ["Relational", "Network", "Hierarchical", "Procedural"],
  answer: "Procedural"
},
{
  question: "What is a relation in the relational database model?",
  options: ["A row in a table", "A column in a table", "A table", "A primary key"],
  answer: "A table"
},
{
  question: "What is a tuple in the relational database model?",
  options: ["A table", "A column in a table", "A row in a table", "A foreign key"],
  answer: "A row in a table"
},
{
  question: "What is an attribute in the relational database model?",
  options: ["A table", "A row in a table", "A column in a table", "A primary key"],
  answer: "A column in a table"
},
{
  question: "What is a primary key?",
  options: ["A column that uniquely identifies each row in a table", "A column used to establish relationships between tables", "A non-key attribute", "A constraint that limits the values in a column"],
  answer: "A column that uniquely identifies each row in a table"
},
{
  question: "What is a foreign key?",
  options: ["A primary key in another table used to establish a link between the two tables", "A column that uniquely identifies each row in a table", "A non-key attribute", "A constraint that ensures data integrity within a column"],
  answer: "A primary key in another table used to establish a link between the two tables"
},
{
  question: "What does SQL stand for?",
  options: ["Structured Query Language", "Simple Question Language", "Standard Query Logic", "Systematic Query Method"],
  answer: "Structured Query Language"
},
{
  question: "Which SQL command is used to retrieve data from a database?",
  options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
  answer: "SELECT"
},
{
  question: "Which SQL command is used to add new records to a table?",
  options: ["SELECT", "CREATE", "INSERT", "ALTER"],
  answer: "INSERT"
},
{
  question: "Which SQL command is used to modify existing records in a table?",
  options: ["DELETE", "UPDATE", "SELECT", "DROP"],
  answer: "UPDATE"
},
{
  question: "Which SQL command is used to remove records from a table?",
  options: ["REMOVE", "ERASE", "DELETE", "TRUNCATE"],
  answer: "DELETE"
},
{
  question: "What is a JOIN operation in SQL used for?",
  options: ["To filter rows based on a condition", "To combine rows from two or more tables based on a related column", "To sort the result set", "To group rows with the same values"],
  answer: "To combine rows from two or more tables based on a related column"
},
{
  question: "Which type of JOIN returns only the rows where there is a match in both tables?",
  options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
  answer: "INNER JOIN"
},
{
  question: "What is a database transaction?",
  options: ["A single SQL statement", "A sequence of operations treated as a single logical unit of work", "A backup of the database", "A user's login session"],
  answer: "A sequence of operations treated as a single logical unit of work"
},
{
  question: "Which of the following is a property of a database transaction (ACID)?",
  options: ["Speed", "Reliability", "Atomicity", "Complexity"],
  answer: "Atomicity"
},
{
  question: "What does 'Atomicity' in ACID properties refer to?",
  options: ["All operations in a transaction must be completed or none of them are", "A transaction must maintain the consistency of the database", "Concurrent transactions should not affect each other", "Once a transaction is committed, it cannot be undone"],
  answer: "All operations in a transaction must be completed or none of them are"
},
{
  question: "What is database normalization?",
  options: ["The process of organizing data to reduce redundancy and improve data integrity", "The process of backing up the database", "The process of encrypting the database", "The process of optimizing query performance"],
  answer: "The process of organizing data to reduce redundancy and improve data integrity"
},
{
  question: "What is the goal of First Normal Form (1NF)?",
  options: ["To eliminate transitive dependencies", "To eliminate repeating groups", "To eliminate partial dependencies", "To ensure that every non-key attribute is fully functionally dependent on the primary key"],
  answer: "To eliminate repeating groups"
},
{
  question: "What is the goal of Second Normal Form (2NF)?",
  options: ["To eliminate transitive dependencies", "To eliminate repeating groups", "To eliminate partial dependencies", "To ensure atomicity of data"],
  answer: "To eliminate partial dependencies"
},
{
  question: "What is the goal of Third Normal Form (3NF)?",
  options: ["To eliminate transitive dependencies", "To eliminate repeating groups", "To eliminate partial dependencies", "To ensure all attributes are dependent only on the primary key"],
  answer: "To eliminate transitive dependencies"
},
{
  question: "What is a database index?",
  options: ["A copy of the entire database", "A data structure that improves the speed of data retrieval operations on a database table", "A constraint on the values in a column", "A way to encrypt data in the database"],
  answer: "A data structure that improves the speed of data retrieval operations on a database table"
},
{
  question: "Which of the following is a type of database index?",
  options: ["Primary Index", "Foreign Index", "Secondary Index", "Tertiary Index"],
  answer: "Secondary Index"
},
{
  question: "What is data integrity?",
  options: ["The speed at which data can be accessed", "The accuracy and consistency of data", "The size of the database", "The number of users who can access the database"],
  answer: "The accuracy and consistency of data"
},
{
  question: "Which of the following is a type of data integrity constraint?",
  options: ["Primary Key Constraint", "Foreign Key Constraint", "NOT NULL Constraint", "All of the above"],
  answer: "All of the above"
},
{
  question: "What is a database view?",
  options: ["A physical table stored on disk", "A virtual table based on the result of an SQL statement", "A backup of the database schema", "A set of user permissions"],
  answer: "A virtual table based on the result of an SQL statement"
},
{
  question: "What is the purpose of a database stored procedure?",
  options: ["To define the structure of tables", "To automate frequently executed SQL code", "To manage user access rights", "To back up the database"],
  answer: "To automate frequently executed SQL code"
},
{
  question: "What is data warehousing?",
  options: ["Storing all types of data in a single database", "A large repository of data collected from various sources for business intelligence", "A small database used for specific applications", "A method of encrypting data at rest"],
  answer: "A large repository of data collected from various sources for business intelligence"
},
{
  question: "What is data mining?",
  options: ["Extracting valuable information and patterns from large datasets", "Creating backups of the database", "Managing database security", "Designing the database schema"],
  answer: "Extracting valuable information and patterns from large datasets"
},
{
  question: "What is NoSQL?",
  options: ["A type of relational database", "A category of databases that do not adhere to the traditional relational model", "A specific SQL dialect", "A tool for database administration"],
  answer: "A category of databases that do not adhere to the traditional relational model"
},
{
  question: "Which of the following is a type of NoSQL database?",
  options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  answer: "MongoDB"
},
{
  question: "What is the CAP theorem?",
  options: ["A set of rules for database normalization", "A theorem that states it's impossible for a distributed data store to simultaneously provide all three of Consistency, Availability, and Partition Tolerance", "A model for relational database design", "A standard for SQL syntax"],
  answer: "A theorem that states it's impossible for a distributed data store to simultaneously provide all three of Consistency, Availability, and Partition Tolerance"
},
{
  question: "What is database sharding?",
  options: ["Encrypting the database", "Splitting a large database across multiple machines", "Creating backups of the database", "Optimizing database queries"],
  answer: "Splitting a large database across multiple machines"
},


{
  question: "What is a computer network?",
  options: ["A single computer system", "Two or more computers connected to share resources", "A collection of software programs", "The physical hardware of a computer"],
  answer: "Two or more computers connected to share resources"
},
{
  question: "What does LAN stand for?",
  options: ["Local Area Network", "Large Area Network", "Logical Address Node", "Link Access Network"],
  answer: "Local Area Network"
},
{
  question: "What does WAN stand for?",
  options: ["Wide Area Network", "Wireless Access Network", "Web Application Network", "Workstation Area Network"],
  answer: "Wide Area Network"
},
{
  question: "What is the OSI model?",
  options: ["A hardware standard for network cables", "A conceptual model that characterizes and standardizes the communication functions of a telecommunication or computing system", "A programming language for network applications", "A type of network topology"],
  answer: "A conceptual model that characterizes and standardizes the communication functions of a telecommunication or computing system"
},
{
  question: "How many layers are there in the OSI model?",
  options: ["4", "5", "6", "7"],
  answer: "7"
},
{
  question: "Which layer of the OSI model is responsible for physical transmission of data?",
  options: ["Application", "Transport", "Network", "Physical"],
  answer: "Physical"
},
{
  question: "Which layer of the OSI model is responsible for routing packets across networks?",
  options: ["Data Link", "Network", "Transport", "Session"],
  answer: "Network"
},
{
  question: "Which layer of the OSI model provides reliable, ordered, and error-checked delivery of data?",
  options: ["Physical", "Data Link", "Network", "Transport"],
  answer: "Transport"
},
]