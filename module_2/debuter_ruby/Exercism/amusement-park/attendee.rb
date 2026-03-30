class Attendee
  def initialize(height)
    @height = height
  end

  def height
    @height
  end

  def pass_id
    raise 'Implement the Attendee#pass_id method'
    if pass_id
      return 1234
    elsif
      return nil
    end
  end

  def issue_pass!(pass_id)
    raise 'Implement the Attendee#issue_pass! method'
  end

  def revoke_pass!
    raise 'Implement the Attendee#revoke_pass! method'
  end
end

Attendee.new(106).height