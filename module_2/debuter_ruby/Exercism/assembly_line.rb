# frozen_string_literal: true

class AssemblyLine
  def initialize(speed)
    @speed = speed
  end

  def production_rate_per_hour
    if @speed >= 0 && @speed <= 4
      @speed.to_f * 221
    elsif @speed > 4 && @speed <= 8
      @speed.to_f * 221 * 90 / 100
    elsif @speed > 8 && @speed <= 9
      @speed.to_f * 221 * 80 / 100
    elsif @speed > 9 && @speed <= 10
      @speed.to_f * 221 * 77 / 100
    end
  end

  def working_items_per_minute
    (production_rate_per_hour / 60).to_i
  end
end

puts AssemblyLine.new(6).production_rate_per_hour
puts AssemblyLine.new(6).working_items_per_minute
puts AssemblyLine.new(4).production_rate_per_hour
puts AssemblyLine.new(4).working_items_per_minute
puts AssemblyLine.new(9).production_rate_per_hour
puts AssemblyLine.new(9).working_items_per_minute
puts AssemblyLine.new(10).production_rate_per_hour
puts AssemblyLine.new(10).working_items_per_minute
