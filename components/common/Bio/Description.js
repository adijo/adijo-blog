export function Description({ className }) {
  return (
    <div>
      <h2 className="text-4xl font-bold text-indigo-200 font-display">
        About me
      </h2>
      <br />
      <p className="text-lg">
        Currently, I'm developing and deploying machine learning models at the
        Boston Consulting Group. Previously, I built distributed, scalable and
        fault tolerant distributed systems at Amazon Web Services and{" "}
        <a href="https://www.livemint.com/Companies/k6ejrcrud0xQXKpC0wjwkN/Dentsu-Aegis-buys-digital-marketing-agency-Sokrati.html">
          Sokrati. (acquired by Merkle, Inc)
        </a>
      </p>
      <br />
      <p className="text-lg">
        I'm not a big fan of labels as they can be self limiting in nature. I
        think of myself as a problem solver. I use every tool in my toolbox to
        solve the problem at hand. I'm experienced in the "full stack" of
        software development and data science, from gathering user requirements,
        scoping, design, planning, implementation, deployment (CI/CD),
        monitoring and maintenance.
      </p>
      <br />
      <a
        href="https://twitter.com/1adityajoshi?ref_src=twsrc%5Etfw"
        class="twitter-follow-button"
        data-size="large"
        data-show-count="false"
      >
        Follow me on Twitter @1adityajoshi
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
      <br />
      <a href="https://github.com/adijo">Read my code on GitHub.</a>
      <br />
      <br />
      <h2 className="text-4xl font-bold text-indigo-200 font-display">
        Education
      </h2>
      <br />
      <p className="text-lg">
        I received a Master's degree in machine learning from the{" "}
        <a href="https://en.wikipedia.org/wiki/Mila_(research_institute)">
          {" "}
          Mila - Quebec AI Institute.
        </a>{" "}
        I took graduate courses in machine learning, deep learning and
        statistics. My undergraduate degree is in computer science from the
        University of Pune.
      </p>
      <br />
      <p className="text-lg">
        Despite my formal education, I have benefited tremendously from the
        incredible free resources on the internet. It amazes me that information
        is freely accessible for those who pay attention.
      </p>

      <br />

      <h2 className="text-4xl font-bold text-indigo-200 font-display">
        Technical Tools
      </h2>
      <br />
      <p className="text-lg">
        <b>Languages:</b> Python, Java, Javascript (React and Next.js)
      </p>
      <br />
      <p className="text-lg">
        <b>Libraries:</b> PyTorch, Keras (TensorFlow), sklearn, xgboost.
      </p>
      <br />
      <p className="text-lg">
        <b>Tools:</b> Jenkins, Circle CI, redis, Docker, Chakra UI, Material UI
      </p>
      <br />
      <p className="text-lg">
        <b>Cloud:</b> Production experience with a considerable chunk of the AWS
        stack, including CloudFormation (IaaS), SNS, SQS, S3, DynamoDB, IAM,
        AutoScaling, etc.
      </p>

      <br />

      <h2 className="text-4xl font-bold text-indigo-200 font-display">
        Talk to me about
      </h2>

      <br />
      <ul className="list-desc tracking-wide">
        <li>Conciousness</li>
        <li>Music</li>
        <li>Artifical Intelligence</li>
        <li>Geopolitics</li>
        <li>Psychology</li>
        <li>History</li>
        <li>Sleep Fitness</li>
        <li>Lifting Weights</li>
        <li>
          Problem solving, check some of my solutions{" "}
          <a href="https://github.com/adijo/data-science-prep">on GitHub</a>
        </li>
        <li></li>
      </ul>
      <br />
      {/* <p className="text-2xl text-yellow-100 font-bold font-display">
        Writing &rarr;
      </p> */}
    </div>
  );
}
