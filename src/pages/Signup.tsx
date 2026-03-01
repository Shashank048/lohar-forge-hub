import { Link } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/Layout";

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="flex min-h-[70vh] items-center bg-background py-20">
        <div className="container mx-auto max-w-md px-4">
          <div className="rounded-lg border border-border bg-card p-8 shadow-card-steel">
            <div className="text-center">
              <h1 className="font-display text-2xl font-bold text-card-foreground">Create Account</h1>
              <p className="mt-1 text-sm text-muted-foreground">Join Lohar Forging to manage orders</p>
            </div>
            {submitted ? (
              <div className="mt-6 rounded-md bg-accent/10 p-4 text-center text-sm font-medium text-accent">
                Sign up functionality coming soon with Lovable Cloud!
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-6 space-y-4">
                <input placeholder="Full Name" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Company Name" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Email" type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Password" type="password" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <button type="submit" className="w-full rounded-md bg-accent py-2.5 font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
                  Create Account
                </button>
              </form>
            )}
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-accent hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
