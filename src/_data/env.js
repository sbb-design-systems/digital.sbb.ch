module.exports = function() {
    return {
      environment: process.env.BUILD_MODE || "development"
    };
  };
