import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to the Voting System</h1>
        <p>Empowering democracy through secure and transparent voting.</p>

        <section className="voting-process">
          <h2>Process of Voting</h2>
          <ol>
            <li><strong>Voter Registration:</strong> Citizens must register before voting.</li>
            <li><strong>Identity Verification:</strong> Voters authenticate using an ID or biometric verification.</li>
            <li><strong>Ballot Selection:</strong> Voters choose candidates on an electronic or paper ballot.</li>
            <li><strong>Vote Casting:</strong> Votes are submitted securely to prevent tampering.</li>
            <li><strong>Vote Counting:</strong> Votes are counted digitally or manually.</li>
            <li><strong>Results Declaration:</strong> The winner is announced based on the final tally.</li>
          </ol>
        </section>

        <section className="about-voting">
          <h2>About the Voting System</h2>
          <p>
            A voting system is a structured method used to collect and count votes in an election. 
            It ensures fairness, transparency, and security in the democratic process. 
            Modern systems include electronic voting machines, online voting platforms, and traditional paper ballots.
          </p>
          <p>
            Governments and organizations use voting systems to conduct elections for leaders, policies, 
            and other important decisions. Secure encryption, voter anonymity, and fraud prevention 
            are key components of a well-designed voting system.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;


