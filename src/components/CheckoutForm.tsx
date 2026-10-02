  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    try {
      const result = await onSubmit(readForm(event.currentTarget));
      if (result.status === "declined") setError(result.message);
    } finally {
      setSubmitting(false);
    }
  }

      <PaymentFields />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit" loading={submitting}>
        Pay now
      </Button>
    </form>
  );
}
