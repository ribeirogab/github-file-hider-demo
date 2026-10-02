  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const result = await onSubmit(readForm(event.currentTarget));
    if (result.status === "declined") setError(result.message);
  }

      <PaymentFields />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit">Pay now</Button>
    </form>
  );
}
