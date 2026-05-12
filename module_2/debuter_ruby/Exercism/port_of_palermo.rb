# frozen_string_literal: true
module Port
  IDENTIFIER = :PALE

  def self.get_identifier(city)
    city.upcase[0,4].to_sym
  end

  def self.get_terminal(ship_identifier)
    if ship_identifier[0,3].to_sym == :OIL || ship_identifier[0,3].to_sym == :GAS
      :A
    else
      :B
    end
  end
end

puts Port::IDENTIFIER
puts Port.get_identifier("Portland")
puts Port.get_terminal(:OIL300)
puts Port.get_terminal(:GAS300)
